import socket
import threading
import random
import re

name = input("Choose your name: ")

server_ip = socket.gethostbyname(socket.gethostname())
port = random.randrange(48621,49151)

server, client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
status = True

server.bind((server_ip, port))
server.listen()

def handle(peer):
    while True:
        try:
            # Broadcasting Messages
            message = client.recv(1024)
            
        except:
            # Removing And Closing Clients
            index = clients.index(client)
            clients.remove(client)
            client.close()
            nickname = nicknames[index]
            broadcast('{} left!'.format(nickname).encode('ascii'))
            nicknames.remove(nickname)
            break

def receive(status = status):
    while True:
        try:
            message = client.recv(1024).decode('ascii')
            if message == 'INIT':
                client.send(name.encode('ascii'))
            elif message == 'CONVO':
                status = False
                message = client.recv(1024).decode('ascii')
                talk_client_info = re.split('_|:', message)
                client.connect((talk_client_info[1], talk_client_info[3]))

                while True:
                    # Accept Connection
                    talk_client, address = server.accept()
                    print("Connected with {}".format(str(address)))

                    # Request And Store Nickname
                    talk_client.send('NICK'.encode('ascii'))
                    nickname = talk_client.recv(1024).decode('ascii')
                    nicknames.append(nickname)
                    clients.append(client)

                    # Print And Broadcast Nickname
                    print("Nickname is {}".format(nickname))
                    broadcast("{} joined!".format(nickname).encode('ascii'))
                    client.send('Connected to server!'.encode('ascii'))
                    
                    # Start Handling Thread For Client
                    thread = threading.Thread(target=handle, args=(client,))
                    thread.start()
            
            else:
                print(message)
        except:
            print("An error occured!")
            client.close()
            break

receive()
nickname = input("Choose your nickname: ")

# Connecting To Server
client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client.connect(('127.0.0.1', 55555))


def write():
    while True:
        message = '{}: {}'.format(nickname, input(''))
        client.send(message.encode('ascii'))

receive_thread = threading.Thread(target=receive)
receive_thread.start()

write_thread = threading.Thread(target=write)
write_thread.start()