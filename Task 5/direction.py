import googlemaps, json, os, fnmatch, numpy

map = googlemaps.Client(key="AIzaSyCT9dShISsjp0qie6WvIMUAEuSCEPlG1vo")
counter = len(fnmatch.filter(os.listdir("./result"), '*.json*'))

# Calculating shortest path
coord_list = []
with open("./data/mcp.json", "r") as mcp_file:
    mcp_list = json.load(mcp_file)
    for mcp in mcp_list["mcp_list"]:
        coord_list.append(mcp['mcp_coord'])
        
direction = map.directions(origin=coord_list[0], destination=coord_list[0], waypoints=coord_list[1:], optimize_waypoints = True, mode='driving')
with open(f"./result/Route{counter}.json", "w") as route_file:
    route_file.write(json.dumps(direction, indent=4))
center_lat = (direction[0]["bounds"]["northeast"]["lat"] + direction[0]["bounds"]["southwest"]["lat"]) / 2
center_lng = (direction[0]["bounds"]["northeast"]["lng"] + direction[0]["bounds"]["southwest"]["lng"]) / 2

# Plot map as an image
marker_points = []
waypoints = []
for leg in direction[0]["legs"]:
    leg_start_loc = leg["start_location"]
    marker_points.append(f'{leg_start_loc["lat"]},{leg_start_loc["lng"]}')
    for step in leg["steps"]:
        end_loc = step["end_location"]
        waypoints.append(f'{end_loc["lat"]},{end_loc["lng"]}')
last_stop = direction[0]["legs"][-1]["end_location"]
marker_points.append(f'{last_stop["lat"]},{last_stop["lng"]}')
markers = [ "color:blue|size:mid|label:" + chr(65+i) + "|" + r for i, r in enumerate(marker_points)]
map_direction = map.static_map (center = f"{center_lat},{center_lng}",
                             scale=2, 
                             zoom=13,
                             size=[1024, 1024], 
                             format="jpg", 
                             maptype="roadmap",
                             markers=markers,
                             path="color:0x0000ee|weight:2|" + "|".join(waypoints))

with open(f"./Result/Route{counter}.jpg", "wb") as img:
    for chunk in map_direction:
        img.write(chunk)
  
# Write route as a string        
route = []
with open("./data/mcp.json") as mcp_file:
    mcp_list = json.load(mcp_file)
    for point in marker_points:
            for mcp in mcp_list["mcp_list"]:
                if(point == mcp["mcp_coord"]):
                    route.append(mcp["mcp_id"])

with open("./data/route.json", "r+") as route_file:
    route_list = json.load(route_file)
    route_id = len(route_list["route_list"])
    route_direction = " -> ".join(route)
    new_route = {
                    "route_id": f"{route_id}",
                    "route_direction": f"{route_direction}",
                    "route_status": "Unassigned",
                }
    route_list["route_list"].append(new_route)
    route_file.seek(0)
    json.dump(route_list, route_file, indent = 4)
    
    
