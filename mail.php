<?php
//$to = "bessonov.n.s@yandex.ru"; // емайл получателя данных из формы
$to = "maksimkosxx@gmail.com"; // емайл получателя данных из формы
$tema = "Предварительная регистрация в проекте Древо"; // тема полученного емайла
$message = "Ваш Nickname: ".$_POST['name']."<br>";//присвоить переменной значение, полученное из формы name=name
$message .= "E-mail: ".$_POST['email']."<br>"; //полученное из формы name=email
$message .= "Сообщение: ".$_POST['message']."<br>"; //полученное из формы name=message
$headers  = 'MIME-Version: 1.0' . "\r\n"; // заголовок соответствует формату плюс символ перевода строки
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; // указывает на тип посылаемого контента
mail($to, $tema, $message, $headers); //отправляет получателю на емайл значения переменных
header("HTTP/1.0 301 Moved Permanently");
                    header("Location: /");
                    die("Redirect");
?>
