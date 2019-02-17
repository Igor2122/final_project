<?php

use Illuminate\Database\Seeder;

class AreaTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //  this structure here is specific to out package installed
        $areas = [
            [
                'name' => 'Ukraine',
                'children' => [
                    [
                        'name' => 'Khmelnitska',
                        'children' => [
                            ['name' => 'Kamianec-Podolsky'],
                            ['name' => 'Dynaevtsy'],
                            ['name' => 'Yarmolentsy'],
                            ['name' => 'Khmelnitsky'],
                            ['name' => 'Shepetovka'],

                        ]
                    ],
                    [
                        'name' => 'Vinnysia',
                        'children' => [
                            ['name' => 'Hnivan'],
                            ['name' => 'Nemirny'],
                            ['name' => 'Tylchyn'],
                            ['name' => 'Ladyzhyn'],
                            ['name' => 'Haisyn'],
                        ]
                    ]
                ]
            ]
        ];
    }
}
