<?php
// Préparation de la requête
$query = $pdo->query('SELECT * FROM questions');

// Éxécution de la requête et récupération des données
$questions = $query->fetchAll();

// Affichage des données
echo '<pre>';
print_r($questions);
echo '</pre>';
?>