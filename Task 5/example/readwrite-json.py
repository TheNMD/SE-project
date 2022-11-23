import json, os, fnmatch

jan_arr = []
mcp_arr = []

with open("./example/janitor.json") as file: # with open se tu file.close() khi thao tac xong
    lst = json.load(file)
    for item in lst['jan_list']:
        if(item['jan_status'] == 'Available'):
	        jan_arr.append(item['jan_id'])

print(jan_arr) #Array bao gom cac janitor available
     
with open("./example/mcp.json") as file: # MCP id = 000 duoc coi la diem khoi hanh nen ko co value cua cap va janitor
    lst = json.load(file)
    for item in lst['mcp_list']:
        if(item['mcp_janitor'] == ''):
	        mcp_arr.append(item['mcp_id'])
         
print(mcp_arr) #Array bao gom cac MCP chua co janitor

jan_id = str(input())
mcp_id = str(input())