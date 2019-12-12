class Curso():
    """docstring for Curso."""
    def __init__(self, id_curso, nome, id_turno):
        super(Curso, self).__init__()
        self.id_curso = id_curso
        self.nome = nome
        self.id_turno = fk_id_turno
