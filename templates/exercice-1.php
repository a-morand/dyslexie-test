<?php require_once "../config/config.php"; ?>
<?php require_once "header.php" ?>
<?php require_once "footer.php" ?>

<?php
    for ($i = 1, $boucle_value = $id_number[0]->rowNumber; $i < $boucle_value; $i++) {
        foreach($questions_bdd as $_questions_bdd): ?>
                <h2><?= $_questions_bdd->question ?></h2>
        <?php endforeach; ?>
    <?php
    }

echo '<pre>';
print_r($id_number);
echo '</pre>';

echo '<pre>';
print_r($questions_bdd);
echo '</pre>';

echo '<pre>';
print_r($answers_bdd);
echo '</pre>';

