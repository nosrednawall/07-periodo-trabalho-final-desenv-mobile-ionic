const alunoForm = (function($){
    const ALUNO_AG = $("#aluno_ag");
    const ALUNO_NOME = $("#aluno_nome");
    const ALUNO_UPDATE_BUTTON = $("#updateButton");

    function clear() {
        setData();
        ALUNO_AG.focus();
    }

    function hasErrors() {
        return ALUNO_AG.val() === null || ALUNO_AG.val() === '';
    }

    function getData() {
        return {
            ag: ALUNO_AG.val(),
            nome: ALUNO_NOME.val(),          
        };
    }

    function setData(ag='', nome='') {
        ALUNO_AG.val(ag);
        ALUNO_NOME.val(nome);        
    }

    function setSubmitButtonText(str) {
        ALUNO_UPDATE_BUTTON.text(str);
    }

    function getSubmitButtonText() {
        return ALUNO_UPDATE_BUTTON.text();
    }

    return {
        clear: clear,
        hasErrors: hasErrors,
        getData: getData,
        setData: setData,
        setSubmitButtonText: setSubmitButtonText,
        getSubmitButtonText: getSubmitButtonText,
    };
})(jQuery);
