<?php
$dataItem = null;
$dataItem = array(
    array(
        'id' => 1,
        'categoryName' => '行业动态'
    ),
    array(
        'id' => 2,
        'categoryName' => '朗朗资讯'
    ),
    array(
        'id' => 3,
        'categoryName' => '媒体报道'
    ),
    array(
        'id' => 4,
        'categoryName' => '公益活动'
    )
);

$result = array(
    'resCode' => 0,
    'data' => $dataItem,
    'message' => 'OK'
);
exit(json_encode($result));
?>