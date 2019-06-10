// Próximo ID para adicionar um novo aluno
let _nextId = 1;
// ID do aluno que está sendo editado
let _activeId = 0;

const ALUNO_FORM = $("#aluno-form");
const ALUNO_TABLE = $("#alunoTable");

function handleAlunoEdit() {
    const row = $(this).parents("tr");
    const cols = row.children("td");

    _activeId = $($(cols[3]).children("button")[0]).data("id");

    alunoForm.setData($(cols[0]).text(), $(cols[1]).text(), $(cols[2]).text());

    alunoForm.setSubmitButtonText("Actualizar");
}

function handleAlunoDeleteClick() {
    $(this).parents("tr").remove();
}

function handleAlunoSubmission(e) {
    e.preventDefault();

    if (alunoForm.hasErrors()) {
        return;
    }

    if (alunoForm.getSubmitButtonText() === "Atualizar") {
        alunoTable.updateInTable(_activeId);
        alunoForm.setSubmitButtonText("Adicionar Aluno");
    } else {
        alunoTable.addToTable(_activeId);
        _nextId += 1;
    }

    alunoForm.clear();
}

ALUNO_TABLE.on('click', '.aluno-edit', handleAlunoEdit);
ALUNO_TABLE.on('click', '.aluno-delete', handleAlunoDeleteClick);
ALUNO_FORM.on('submit', handleAlunoSubmission);
