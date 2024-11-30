<?php
    // XML output
    header('Content-Type: text/xml');
    // XML header
    echo '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>';
    // print the <response> element
    echo '<response>';
    // get user name
    $userName = $_GET['userName'];

    echo htmlentities($userName) . ', have a nice day!';

    echo '<response>';
?>