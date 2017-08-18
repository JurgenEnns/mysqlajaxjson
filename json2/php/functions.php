<?php
include 'db.php';
$name = $_POST["name"];
$sql = "SELECT name, email, age, location FROM user WHERE name LIKE '".$name."'";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    // output data of each row
  // while($row = mysqli_fetch_assoc($result)) {
  //   echo "id: " . $row["id"]. " - Name: " . $row["name"]. " " . $row["lastname"]. "<br>";
  // }
  $data = mysqli_fetch_all($result,MYSQLI_ASSOC);
  echo json_encode($data);
} else {
  echo "0 results";
}

mysqli_close($conn);
?>