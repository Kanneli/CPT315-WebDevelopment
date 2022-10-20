<!DOCTYPE html>  
<head>  
    <title>Hello World!</title>
</head>  

<body>  
    <h1>Hello World!</h1>
    <p><?php echo 'We are running PHP, version: ' . phpversion(); ?></p>

    <?php
    $ages['Peter'] = 32;
    $ages['Quack'] = 34;
    $ages['Joe'] = 30;

    echo "Peter is " . $ages['Peter'] . " years old"
    ?>
</body>