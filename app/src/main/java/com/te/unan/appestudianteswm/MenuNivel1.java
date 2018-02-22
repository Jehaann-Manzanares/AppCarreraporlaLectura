package com.te.unan.appestudianteswm;

import android.content.Intent;
import android.media.MediaPlayer;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.view.WindowManager;
import android.widget.ArrayAdapter;
import android.widget.ImageView;
import android.widget.ListView;

public class MenuNivel1 extends AppCompatActivity {

    ImageView act1,act2 ,act3 ,act4,act5,act6,act7,act8,act9;
    MediaPlayer mp;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN,WindowManager.LayoutParams.FLAG_FULLSCREEN);
        setContentView(R.layout.activity_menu_nivel1);

        act1 = (ImageView) findViewById(R.id.actividad1);
        act2 = (ImageView) findViewById(R.id.actividad2);
        act3 = (ImageView) findViewById(R.id.actividad3);
        act4 = (ImageView) findViewById(R.id.actividad4);
        act5 = (ImageView) findViewById(R.id.actividad5);
        act6 = (ImageView) findViewById(R.id.actividad6);
        act7 = (ImageView) findViewById(R.id.actividad7);
        act8 = (ImageView) findViewById(R.id.actividad8);
        act9 = (ImageView) findViewById(R.id.actividad9);

        act1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent= new Intent(getApplicationContext(),Act_1_ini.class);
                intent.putExtra("id","act1");
                startActivity(intent);


            }
        });

        act2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(getApplicationContext(),Act_1_ini.class);
                intent.putExtra("id","act2");
                startActivity(intent);
            }
        });

        act3.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(getApplicationContext(),Act_1_ini.class);
                intent.putExtra("id","act3");
                startActivity(intent);
            }
        });

        act4.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(getApplicationContext(),Act_1_ini.class);
                intent.putExtra("id","act4");
                startActivity(intent);
            }
        });
        act5.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(getApplicationContext(),Act_1_ini.class);
                intent.putExtra("id","act5");
                startActivity(intent);
            }
        });

        act6.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(getApplicationContext(),Act_1_ini.class);
                intent.putExtra("id","act6");
                startActivity(intent);
            }
        });

        act7.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(getApplicationContext(),Act_1_ini.class);
                intent.putExtra("id","act7");
                startActivity(intent);
            }
        });

        act8.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(getApplicationContext(),Act_1_ini.class);
                intent.putExtra("id","act8");
                startActivity(intent);
            }
        });

        act9.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                //audio();
                Intent intent = new Intent(getApplicationContext(),Act_1_ini.class);
                intent.putExtra("id","act9");
                startActivity(intent);

            }
        });





    }

    @Override
    public void onBackPressed()
    {
        // Añade más funciones si fuese necesario
        super.onBackPressed();  // Invoca al método
    }

   /* public void  audio() {

        mp = new MediaPlayer();

        mp = MediaPlayer.create(this ,R.raw.mario_brosvida);
        mp.start();

    }*/





}
