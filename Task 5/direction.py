import googlemaps, json, os, fnmatch

map = googlemaps.Client(key="AIzaSyCT9dShISsjp0qie6WvIMUAEuSCEPlG1vo")
counter = len(fnmatch.filter(os.listdir("./result"), '*.json*'))

# Calculating shortest path
coord = []
with open("./data/mcp.json") as mcp_file:
    mcp_list = json.load(mcp_file)
    for mcp in mcp_list['mcp_list']:
	    coord.append(mcp['mcp_coord'])
results = map.directions(origin=coord[0], destination=coord[0], waypoints=coord[1:], optimize_waypoints = True, mode='driving')
with open(f"./result/Route{counter}.json", "w") as route_file:
    route_file.write(json.dumps(results, indent=4))

# Plot map as an image
marker_points = []
waypoints = []
for leg in results[0]["legs"]:
    leg_start_loc = leg["start_location"]
    marker_points.append(f'{leg_start_loc["lat"]},{leg_start_loc["lng"]}')
    for step in leg["steps"]:
        end_loc = step["end_location"]
        waypoints.append(f'{end_loc["lat"]},{end_loc["lng"]}')
last_stop = results[0]["legs"][-1]["end_location"]
marker_points.append(f'{last_stop["lat"]},{last_stop["lng"]}')

markers = [ "color:blue|size:mid|label:" + chr(65+i) + "|" + r for i, r in enumerate(marker_points)]
result_map = map.static_map (center = waypoints[0],
                             scale=2, 
                             zoom=12,
                             size=[1024, 1024], 
                             format="jpg", 
                             maptype="roadmap",
                             markers=markers,
                             path="color:0x0000ff|weight:2|" + "|".join(waypoints))

with open(f"./Result/Route{counter}.jpg", "wb") as img:
    for chunk in result_map:
        img.write(chunk)
