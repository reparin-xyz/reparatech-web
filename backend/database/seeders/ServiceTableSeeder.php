<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Seeder;

class ServiceTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(): void
    {
        $services = [
            [
                'nama_jasa' => 'Laptop',
                'image' => 'laptop.png',
                'perkiraan_harga' => '1000000',
                'kategori_id' => 1,
                'estimasi' => 3,
            ],
            [
                'nama_jasa' => 'Laptop (Apple Devices)',
                'image' => 'laptop.png',
                'perkiraan_harga' => '1000000',
                'kategori_id' => 1,
                'estimasi' => 3,
            ],
            [
                'nama_jasa' => 'Smartphone',
                'image' => 'smartphone.png',
                'perkiraan_harga' => '2000000',
                'kategori_id' => 2,
                'estimasi' => 6,
            ],
            [
                'nama_jasa' => 'Tablet',
                'image' => 'tablet.png',
                'perkiraan_harga' => '5000000',
                'kategori_id' => 3,
                'estimasi' => 12,
            ],
            [
                'nama_jasa' => 'Headphone',
                'image' => 'aksesoris.png',
                'perkiraan_harga' => '500000',
                'kategori_id' => 4, // Aksesoris
                'estimasi' => 2,
            ],
            [
                'nama_jasa' => 'Smartwatch',
                'image' => 'aksesoris.png',
                'perkiraan_harga' => '1500000',
                'kategori_id' => 4, // Aksesoris
                'estimasi' => 4,
            ],
            [
                'nama_jasa' => 'Mouse Wireless',
                'image' => 'aksesoris.png',
                'perkiraan_harga' => '300000',
                'kategori_id' => 4, // Aksesoris
                'estimasi' => 1,
            ],
            [
                'nama_jasa' => 'Powerbank',
                'image' => 'aksesoris.png',
                'perkiraan_harga' => '400000',
                'kategori_id' => 4, // Aksesoris
                'estimasi' => 3,
            ],
            [
                'nama_jasa' => 'Keyboard Mechanical',
                'image' => 'aksesoris.png',
                'perkiraan_harga' => '700000',
                'kategori_id' => 4, // Aksesoris
                'estimasi' => 5,
            ],
            [
                'nama_jasa' => 'Kabel Charger USB',
                'image' => 'aksesoris.png',
                'perkiraan_harga' => '150000',
                'kategori_id' => 4, // Aksesoris
                'estimasi' => 1,
            ],
        ];

        foreach ($services as $service) {
            Service::factory()->create($service);
        }
    }
}
