<?php
$data = json_decode(file_get_contents("php://input"), true);

if (!$data || !isset($data['articles']) || !isset($data['images'])) {
    http_response_code(400);
    echo "Data tidak valid.";
    exit;
}

file_put_contents('articles.json', json_encode($data, JSON_PRETTY_PRINT));
echo "Perubahan berhasil disimpan!";
?>
