class Aluno():
    """docstring for Aluno."""
    def __init__(self, id_aluno, nome, matricula, cpf, nascimento, id_curso, id_endereco):
        super(Aluno, self).__init__()
        self.id_aluno = id_aluno
        self.nome = nome
        self.matricula = matricula
        self.cpf = cpf
        self.nascimento = nascimento
        self.id_curso = id_curso
        self.id_endereco = id_endereco
