<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class FrontEndController extends Controller
{
 public function home(){
    return Inertia::render('Home');
 }

 public function About(){
    return Inertia:: render('About');
 }
}
