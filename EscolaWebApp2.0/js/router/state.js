app.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

    // Rota padrão.
    $urlRouterProvider.otherwise("/home");

    // Estados
    $stateProvider
      // Home
      .state('home', {
        url: '/home',
        title: 'EscolaApp - Página Principal',
        templateUrl: 'Home.html',
        controller: 'HomeController'
      })
      .state('aluno', {
        url: '/aluno',
        title: 'EscolaApp - Cadastrar Aluno',
        templateUrl: 'Aluno.html',
        controller: 'AlunoController'
      })
      .state('campus', {
        url: '/campus',
        title: 'EscolaApp - Cadastrar Campus',
        templateUrl: 'Campus.html',
        controller: 'CampusController'
      })
      .state('curso', {
        url: '/curso',
        title: 'EscolaApp - Cadastrar Curso',
        templateUrl: 'Curso.html',
        controller: 'CursoController'
      })
      .state('disciplina', {
        url: '/disciplina',
        title: 'EscolaApp - Cadastrar Disciplina',
        templateUrl: 'Disciplina.html',
        controller: 'DisciplinaController'
      })
      .state('endereco', {
        url: '/endereco',
        title: 'EscolaApp - Cadastrar Endereco',
        templateUrl: 'Endereco.html',
        controller: 'EnderecoController'
      })
      .state('escola', {
        url: '/escola',
        title: 'EscolaApp - Cadastrar Escola',
        templateUrl: 'Escola.html',
        controller: 'EscolaController'
      })
      .state('professor', {
        url: '/professor',
        title: 'EscolaApp - Cadastrar Professor',
        templateUrl: 'Professor.html',
        controller: 'ProfessorController'
      })
      .state('turma', {
        url: '/turma',
        title: 'EscolaApp - Cadastrar Turma',
        templateUrl: 'Turma.html',
        controller: 'TurmaController'
      })

      .state('turno', {
        url: '/turno',
        title: 'EscolaApp - Cadastrar Turno',
        templateUrl: 'Turno.html',
        controller: 'TurnoController'
      })
      .state('alunos', {
      url: '/alunos',
      title: 'EscolaApp - Listar Alunos',
      templateUrl: 'Alunos.html',
      controller: 'AlunosController'
    })
    .state('campi', {
        url: '/campi',
        title: 'EscolaApp - Listar Campi',
        templateUrl: 'Campi.html',
        controller: 'CampiController'
      })
    .state('cursos', {
        url: '/cursos',
        title: 'EscolaApp - Listar Cursos',
        templateUrl: 'Cursos.html',
        controller: 'CursosController'
      })
    .state('disciplinas', {
        url: '/disciplinas',
        title: 'EscolaApp - Listar Disciplinas',
        templateUrl: 'Disciplinas.html',
        controller: 'DisciplinasController'
      })
    .state('enderecos', {
        url: '/enderecos',
        title: 'EscolaApp - Listar Enderecos',
        templateUrl: 'Enderecos.html',
        controller: 'EnderecosController'
      })
    .state('escolas', {
        url: '/escolas',
        title: 'EscolaApp - Listar Escolas',
        templateUrl: 'Escolas.html',
        controller: 'EscolasController'
      })
    .state('professores', {
        url: '/professores',
        title: 'EscolaApp - Listar Professores',
        templateUrl: 'Professores.html',
        controller: 'ProfessoresController'
      })
    .state('turmas', {
        url: '/turmas',
        title: 'EscolaApp - Listar Turmas',
        templateUrl: 'Turmas.html',
        controller: 'TurmasController'
      })
      .state('turnos', {
         url: '/turnos',
         title: 'EscolaApp - Listar Turnos',
         templateUrl: 'Turnos.html',
         controller: 'TurnosController'
      });

  })

  //take all whitespace out of string
  .filter('nospace', function() {
    return function(value) {
      return (!value) ? '' : value.replace(/ /g, '')
    }
  })
  //replace uppercase to regular case
  .filter('humanizeDoc', function() {
    return function(doc) {
      if (!doc) return;
      if (doc.type === 'directive') {
        return doc.name.replace(/([A-Z])/g, function($1) {
          return '-' + $1.toLowerCase();
        })
      }

      return doc.label || doc.name;
    }
  })
