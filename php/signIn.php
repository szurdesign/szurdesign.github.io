<?php
if(isset($_POST["submit"]) && $_POST["submit"]=="Sign in") {
    // define variations
    $phoneNumber=$_POST["phoneNumber"];
    $password=$_POST["password"];

    // database
    require("/var/www/html/db_config.php");
    $con=mysql_connect($mysql_server_name,$mysql_username,$mysql_password);
    mysql_select_db($mysql_database);
    if(mysqli_connect_errno($con)) {
        // check connection
        echo "<script>alert('Fail to connect to MySQL Database')</script>";
    }
    $sql="SELECT username FROM userInfo WHERE phoneNumber='$phoneNumber' and password='$password'";
    $result=mysql_query($sql) or die(mysql_error());
    $num=mysql_num_rows($result);
    if($num && $num==1) {
        // session starts
        session_start();
        $result=mysql_query("select username from userInfo where phoneNumber='$phoneNumber'");
        $row=mysql_fetch_row($result);
        $_SESSION['username']=$row[0];
        echo "<script>alert('登录成功！');location.href='../index.html';</script>";
        exit();
    }else {
        echo "<script>alert('登录失败！')</script>";
    }
}else {
    echo "<script>alert('登录失败！')</script>";
}
?>
