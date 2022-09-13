<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "miBase";

$id = $_POST["id"];
$name = $_POST["nombre"];
$score = $_POST["escor"];
$level = $_POST["nivel"];




// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO Player (PersonID, Name, Score, Level)
VALUES (". $id . ",'" . $name ."', 32, 25)";


if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}


$conn->close();
?>