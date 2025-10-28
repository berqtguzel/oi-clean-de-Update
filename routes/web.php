<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ServicesController;


Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/dienstleistungen', [ServicesController::class, 'index'])->name('services.index');

