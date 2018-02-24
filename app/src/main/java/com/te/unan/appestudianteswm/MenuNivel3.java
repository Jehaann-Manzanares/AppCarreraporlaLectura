package com.te.unan.appestudianteswm;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.view.WindowManager;
import android.widget.ImageView;

public class MenuNivel3 extends metodos {

    ImageView act1,act2,act3,act4,act5,act6,act7,act8,act9,act10,act11,act12,act13,act14;
    Intent intent;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN,WindowManager.LayoutParams.FLAG_FULLSCREEN);
        setContentView(R.layout.activity_menu_nivel3);

        act1 = findViewById(R.id.actividad21);
        act2 = findViewById(R.id.actividad22);
        act3 = findViewById(R.id.actividad23);
        act4 = findViewById(R.id.actividad24);
        act5 = findViewById(R.id.actividad25);
        act6 = findViewById(R.id.actividad26);
        act7 = findViewById(R.id.actividad27);
        act8 = findViewById(R.id.actividad28);
        act9 = findViewById(R.id.actividad29);
        act10 = findViewById(R.id.actividad30);
        act11 = findViewById(R.id.actividad31);
        act12 = findViewById(R.id.actividad32);
        act13 = findViewById(R.id.actividad33);
        act14 = findViewById(R.id.actividad34);

        act1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                audio();
                intent= new Intent(getApplicationContext(),Act_1_ini.class);
                intent.putExtra("id","act1_n3");
                startActivity(intent);
            }
        });

        act2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                audio();
                intent= new Intent(getApplicationContext(),Act_1_ini.class);
                intent.putExtra("id","act2_n3");
                startActivity(intent);
            }
        });

        act3.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                audio();
                intent= new Intent(getApplicationContext(),Act_1_ini.class);
                intent.putExtra("id","act3_n3");
                startActivity(intent);
            }
        });

        act4.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                audio();
                intent= new Intent(getApplicationContext(),Act_1_ini.class);
                intent.putExtra("id","act4_n3");
                startActivity(intent);
            }
        });

        act5.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                audio();
                intent= new Intent(getApplicationContext(),Act_1_ini.class);
                intent.putExtra("id","act5_n3");
                startActivity(intent);
            }
        });

        act6.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                audio();
                intent= new Intent(getApplicationContext(),Act_1_ini.class);
                intent.putExtra("id","act6_n3");
                startActivity(intent);
            }
        });

        act7.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                audio();
                intent= new Intent(getApplicationContext(),Act_1_ini.class);
                intent.putExtra("id","act7_n3");
                startActivity(intent);
            }
        });

        act8.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                audio();
                intent= new Intent(getApplicationContext(),Act_1_ini.class);
                intent.putExtra("id","act8_n3");
                startActivity(intent);
            }
        });

        act9.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                audio();
                intent= new Intent(getApplicationContext(),Act_1_ini.class);
                intent.putExtra("id","act9_n3");
                startActivity(intent);
            }
        });

        act10.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                audio();
                intent= new Intent(getApplicationContext(),Act_1_ini.class);
                intent.putExtra("id","act10_n3");
                startActivity(intent);
            }
        });

        act11.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                audio();
                intent= new Intent(getApplicationContext(),Act_1_ini.class);
                intent.putExtra("id","act11_n3");
                startActivity(intent);
            }
        });

        act12.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                audio();
                intent= new Intent(getApplicationContext(),Act_1_ini.class);
                intent.putExtra("id","act12_n3");
                startActivity(intent);
            }
        });

        act13.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                audio();
                intent= new Intent(getApplicationContext(),Act_1_ini.class);
                intent.putExtra("id","act13_n3");
                startActivity(intent);
            }
        });

        act14.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                audio();
                intent= new Intent(getApplicationContext(),Act_1_ini.class);
                intent.putExtra("id","act14_n3");
                startActivity(intent);
            }
        });

    }
}
