<?php
if (file_exists('articles.json')) {
    header('Content-Type: application/json');
    echo file_get_contents('articles.json');
} else {
    echo json_encode([]);
}
?>
