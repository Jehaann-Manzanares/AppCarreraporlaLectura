package com.te.unan.appestudianteswm;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.view.WindowManager;
import android.widget.ImageView;

public class MenuNivel2 extends AppCompatActivity {

    ImageView act1,act2,act3,act4,act5,act6,act7,act8,act9,act10,act11;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN,WindowManager.LayoutParams.FLAG_FULLSCREEN);
        setContentView(R.layout.activity_menu_nivel2);


        act1 = findViewById(R.id.actividad11);
        act2 = findViewById(R.id.actividad12);
        act3 = findViewById(R.id.actividad13);
        act4 = findViewById(R.id.actividad14);
        act5 = findViewById(R.id.actividad15);
        act6 = findViewById(R.id.actividad16);
        act7 = findViewById(R.id.actividad17);
        act8 = findViewById(R.id.actividad18);
        act9 = findViewById(R.id.actividad19);
        act10 = findViewById(R.id.actividad20);
        act11 = findViewById(R.id.actividad10);

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

        act10.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                Intent intent= new Intent(getApplicationContext(),Act_1_ini.class);
                intent.putExtra("id","act10_n2");
                startActivity(intent);
            }
        });

        act11.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                Intent intent= new Intent(getApplicationContext(),Act_1_ini.class);
                intent.putExtra("id","act11_n2");
                startActivity(intent);
            }
        });





    }
}
