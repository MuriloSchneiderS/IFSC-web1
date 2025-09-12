<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nome = $_POST['nome_usuario'];
    $email = $_POST['email_usuario'];
    $mensagem = $_POST['mensagem_usuario'];

    $nome_seguro = htmlspecialchars($nome);
    $email_seguro = filter_var($email, FILTER_SANITIZE_EMAIL);
    $mensagem_segura = htmlspecialchars($mensagem);

    if (!filter_var($email_seguro, FILTER_VALIDATE_EMAIL)) {
        die("Formato de e-mail inválido.");
    }

    echo "<h1>Dados Recebidos com Sucesso!</h1>";
    echo "<p><strong>Nome:</strong> " . $nome_seguro . "</p>";
    echo "<p><strong>Email:</strong> " . $email_seguro . "</p>";
    echo "<p><strong>Mensagem:</strong> " . $mensagem_segura . "</p>";

} else {
    echo "<h1>Acesso Inválido</h1>";
    echo "<p>Por favor, preencha o formulário para enviar os dados.</p>";
}

?>