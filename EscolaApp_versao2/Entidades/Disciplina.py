class Disciplina():
    """docstring for Disciplina."""
    def __init__(self, id_disciplina, nome, id_professor):
        super(Disciplina, self).__init__()
        self.id_disciplina = id_disciplina
        self.nome = nome
        self.id_professor = id_professor
