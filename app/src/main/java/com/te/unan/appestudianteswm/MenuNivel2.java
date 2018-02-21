package com.te.unan.appestudianteswm;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.view.WindowManager;
import android.widget.ImageView;

public class MenuNivel2 extends AppCompatActivity {

    ImageView act1,act2,act3,act4,act5,act6,act7,act8,act9;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN,WindowManager.LayoutParams.FLAG_FULLSCREEN);
        setContentView(R.layout.activity_menu_nivel2);

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
                intent.putExtra("id","act1_n2");
                startActivity(intent);
            }
        });

        act2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                Intent intent= new Intent(getApplicationContext(),Act_1_ini.class);
                intent.putExtra("id","act2_n2");
                startActivity(intent);
            }
        });

        act3.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                Intent intent= new Intent(getApplicationContext(),Act_1_ini.class);
                intent.putExtra("id","act3_n2");
                startActivity(intent);
            }
        });

        act4.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                Intent intent= new Intent(getApplicationContext(),Act_1_ini.class);
                intent.putExtra("id","act4_n2");
                startActivity(intent);
            }
        });

        act5.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                Intent intent= new Intent(getApplicationContext(),Act_1_ini.class);
                intent.putExtra("id","act5_n2");
                startActivity(intent);
            }
        });

        act6.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                Intent intent= new Intent(getApplicationContext(),Act_1_ini.class);
                intent.putExtra("id","act6_n2");
                startActivity(intent);
            }
        });

        act7.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                Intent intent= new Intent(getApplicationContext(),Act_1_ini.class);
                intent.putExtra("id","act7_n2");
                startActivity(intent);
            }
        });

        act8.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                Intent intent= new Intent(getApplicationContext(),Act_1_ini.class);
                intent.putExtra("id","act8_n2");
                startActivity(intent);
            }
        });

        act9.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                Intent intent= new Intent(getApplicationContext(),Act_1_ini.class);
                intent.putExtra("id","act9_n2");
                startActivity(intent);
            }
        });


    }
}
