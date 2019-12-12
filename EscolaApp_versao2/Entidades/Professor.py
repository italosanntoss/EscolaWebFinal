class Professor():
    """docstring for Professor."""
    def __init__(self, id_professor, nome, id_endereco):
        super(Professor, self).__init__()
        self.id_professor = id_professor
        self.nome = nome
        self.id_endereco = id_endereco
