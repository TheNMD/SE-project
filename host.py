import socket
import threading
import Peer

host_ip = socket.gethostbyname(socket.gethostname())
port = 48620

host = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
host.bind((host_ip, port))

host.listen()

peer_list = []

def chat_notify(message, peer1_index, peer2_index):
    peer_list[peer1_index].peer_socket.send(message)
    peer_list[peer2_index].peer_socket.send(message)
    
def broadcast(message):
    for peer in peer_list:
        if (peer.status):
            peer.peer_socket.send(message)

def handle(peer):
    while True:
        try:
            message = peer.recv(1024)
            if (message[0] == '$' and message[message[-1]] == '$'):
                peer.peer_socket.send('CONVO'.encode('ascii'))
                name = message[1:-1]
                index = peer_list.index(name)
                peer.peer_socket.send(f'ip:{host_ip}_port:{peer_list[index].port}'.encode('ascii'))
            else:
                broadcast(message)
        except:
            index = peer_list.index(peer)
            name = peer_list[index].name
            peer_list.remove(peer)
            peer.close()
            broadcast(f'{name} left!'.encode('ascii'))
            break

def receive():
    while True:
        peer_socket, address = host.accept()
        print(f"Connected with {str(address)}")

        peer_socket.send('INIT'.encode('ascii'))
        name = peer_socket.recv(1024).decode('ascii')
        peer = Peer(name, peer_socket.getsockname()[1], peer_socket)
        peer_list.append(peer)

        print(f"Your name is {name}")
        peer.peer_socket.send('Connected to host!'.encode('ascii'))
        broadcast(f'Current people online: {peer_list}'.encode('ascii'))

        if len(peer_list) == 1:
            peer.peer_socket.send('Please wait until another user arrives.')
        else:
            broadcast('Who do you want to talk to? (Syntax: $Name$)'.encode('ascii'))

        thread = threading.Thread(target=handle, args=(peer,))
        thread.start()

receive()
