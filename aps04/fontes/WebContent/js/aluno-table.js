const alunoTable = (function($){
    const ALUNO_TABLE_BODY = $("#alunoTable tbody");

    function alunoBuildTableRow(id) {
    	//const aluno = {id: id, ...alunoForm.getData()};
        const aluno = alunoForm.getData();
        aluno.id = id;
        const alunoTpl = _.template($("#alunoTemplate").html());

        return alunoTpl(aluno);
    }

    function addToTable() {
        ALUNO_TABLE_BODY.append(alunoBuildTableRow(_nextId));
    }

    function _findAlunoRowById(id) {
        return $("#alunoTable button[data-id='" + id + "']").parents("tr")[0];
    }

    function updateInTable(id)
    {
        const row = _findAlunoRowById(id);
        const $row = $(row);

        // Adiciona a linha modifica na tabela
        $row.after(alunoBuildTableRow());

        // Remover a linha antiga
        $row.remove();
    }

    return {
        addToTable: addToTable,
        updateInTable: updateInTable
    }
})(jQuery);