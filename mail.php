<?php
$to = "bessonov.n.s@yandex.ru"; // емайл получателя данных из формы
$tema = "Предварительная регистрация в проекте Древо"; // тема полученного емайла
$message .= "E-mail: ".$_POST['email']."<br>"; //полученное из формы name=email
$headers  = 'MIME-Version: 1.0' . "\r\n"; // заголовок соответствует формату плюс символ перевода строки
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; // указывает на тип посылаемого контента
mail($to, $tema, $message, $headers); //отправляет получателю на емайл значения переменных
header("HTTP/1.0 301 Moved Permanently");header("Location: /"); die("Redirect");
?>
