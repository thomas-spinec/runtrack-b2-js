<?php
function connect_db(): PDO
{
    $pdo = new PDO('mysql:host=localhost;dbname=lp_official', 'root', '');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $pdo;
}

function my_search_student(string $email): array
{
    // on récupère toutes les infos de l'étudiant y compris le nom de la promo
    $pdo = connect_db();
    $sql = "SELECT student.*, grade.name as grade_name FROM student INNER JOIN grade ON student.grade_id = grade.id WHERE email = :email";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        ':email' => $email
    ]);
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

if (isset($_GET["email"])) {
    $email = $_GET["email"];
    $result = my_search_student($email);
    echo json_encode($result);
}