package com.te.unan.appestudianteswm;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.view.WindowManager;
import android.widget.ArrayAdapter;
import android.widget.ImageView;
import android.widget.ListView;

public class MenuNivel1 extends AppCompatActivity {

    ImageView act1,act2 ,act3 ,act4,act5;
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





    }

    @Override
    public void onBackPressed()
    {
        // Añade más funciones si fuese necesario
        super.onBackPressed();  // Invoca al método
    }
}
