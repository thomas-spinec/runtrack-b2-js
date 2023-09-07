<?php
function connect_db(): PDO
{
    $pdo = new PDO('mysql:host=localhost;dbname=lp_official', 'root', '');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $pdo;
}

function my_insert_student(string $email, string $fullname, string $genre, int $grade_id, Datetime $birthdate): bool
{
    $pdo = connect_db();
    $sql = "INSERT INTO student (email, fullname, gender, grade_id, birthdate) VALUES (:email, :fullname, :genre, :grade_id, :birthdate)";
    $stmt = $pdo->prepare($sql);

    // si la requête s'est bien passé on retourne true
    if ($stmt->execute([
        ':email' => $email,
        ':fullname' => $fullname,
        ':genre' => $genre,
        ':grade_id' => $grade_id,
        ':birthdate' => $birthdate->format('Y-m-d')
    ])) {
        return true;
    }

    return false;
}

function getGrades(): array
{
    $pdo = connect_db();
    $sql = "SELECT * FROM grade";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

if (isset($_POST['student-mail'])) {
    $email = $_POST['student-mail'];
    $fullname = $_POST['student-fullname'];
    $genre = $_POST['student-gender'];
    $grade_id = $_POST['student-grade'];
    $birthdate = new DateTime($_POST['student-birthdate']);
    $result = my_insert_student($email, $fullname, $genre, $grade_id, $birthdate);
    if ($result) {
        echo "Student registered successfully";
    } else {
        echo "Error while registering student";
    }
}

// s'il y a une requête en GET
if (isset($_GET['get'])) {
    $grades = getGrades();
    echo json_encode($grades);
}