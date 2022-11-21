class Peer:
    def __init__(self, name, port, peer_socket, status = True) -> None:
        self.name = name
        self.port = port
        self.peer_socket = peer_socket
        self.status = status