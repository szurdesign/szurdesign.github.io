<?php
if(isset($_POST["submit"]) && $_POST["submit"]=="Sign up") {
    // define variations
    $username=$_POST["username"];
    $password=$_POST["password"];
    $email=$_POST["email"];
    $phoneNumber=$_POST["phoneNumber"];

    // database
    require("/var/www/html/db_config.php");
    $con=mysql_connect($mysql_server_name,$mysql_username,$mysql_password);
    mysql_select_db($mysql_database);
    if(mysqli_connect_errno($con)) {
        // check connection
        echo "<script>alert('Fail to connect to MySQL Database')</script>";
    }
    $checkSql="SELECT username FROM userInfo WHERE username=binary'".$username."'";
    $result=mysql_query($checkSql) or die(mysql_error());
    $num=mysql_num_rows($result);
    if($num) {
        // 已存在用户名
        echo "<script>alert('用户名已存在！')</script>";
    }else {
        // 用户名不存在，可以注册
        $sql_insert="insert into userInfo(username,password,email,phoneNumber)
           values('$username','$password','$email','$phoneNumber');";
        $res_insert=mysql_query($sql_insert);
        if($res_insert) {
            echo "<script>alert('注册成功！');location.href='../index.html';</script>";
            exit();
        }else {
            echo "<script>alert('注册失败！')</script>";
            die(mysql_error());
        }

    }
}else {
    echo "跳转失败！";
}
?>
