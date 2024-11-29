<!DOCTYPE hmtl>
<html>

<head>
    <title>Sito per il Museo</title>
    <meta charset="utf-8" />
    <meta nome="author" content="Marco Calabrese" />
    <meta nome="keyword" lang="it" content="museo,strumenti,guida" />
    <meta nome="description" content="informazione sugli strumenti del museo" />

    <link rel="icon" href="img/code.ico" type="image/png" />
    <link rel="stylesheet" type="text/css" href="../museo_style.css">
</head>

<body>
    <div class="header">
        <h1>Museo Scientifico</h1>
    </div>

    <div class="container">

        <?php include 'strumento_'+$_GET["id"]+'.html' ?>
        
    </div>

    <div class="footer">
        <h2>Come trovarci</h2>
        <div class="footer-text">
            <p><strong>Indirizzo</strong><br>
                Complesso Monumentale Carcere Borbonico<br>
                Piazza Alfredo De Marsico, Avellino 83100
            </p>
            <p><strong>Per informazioni telefonare a:<br></strong>
                XXX XX XX XXX – Prof. Gaetano Abate<br>
                XXX XX XX XXX – Prof.sa Diana Testa<br>
                +39 0825 790 733 | 539 - Museo Irpino
            </p>
            <p><strong>altre informazioni e contatti:<br></strong>
                email abate .it<br>
                info@museoirpino.it<br>
                
        </div>
    </div>



</body>

</html>