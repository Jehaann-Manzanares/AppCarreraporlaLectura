package com.te.unan.appestudianteswm;

import android.content.DialogInterface;
import android.content.Intent;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.view.WindowManager;
import android.widget.ImageButton;
import android.widget.ImageView;

public class MenuActivity extends metodos {

    ImageView nivel1,nivel2,nivel3,btncreditos;
    Intent intent;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN,WindowManager.LayoutParams.FLAG_FULLSCREEN);
        setContentView(R.layout.activity_menu);

        nivel1 = (ImageView) findViewById(R.id.nivel1);
        nivel2 = (ImageView) findViewById(R.id.nivel2);
        nivel3 = (ImageView) findViewById(R.id.nivel3);
        btncreditos = (ImageView) findViewById(R.id.btncreditos);

        audiofondo();

        nivel1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                audio();
                intent = new Intent(getApplicationContext(),MenuNivel1.class);
                startActivity(intent);

            }
        });

        nivel2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                audio();
                intent = new Intent(getApplicationContext(),MenuNivel2.class);
                startActivity(intent);

            }
        });

        nivel3.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                audio();
                intent = new Intent(getApplicationContext(),MenuNivel3.class);
                startActivity(intent);

            }
        });

        btncreditos.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                audio();
                intent = new Intent(getApplicationContext(),Creditos.class);
                startActivity(intent);

            }
        });

    }

    @Override
    public void onBackPressed() {

        AlertDialog.Builder builder = new AlertDialog.Builder(this);
        builder.setTitle("Esto se va a poner divertido");
        builder.setMessage("¿Quieres dejar el maratòn?");

        builder.setPositiveButton("si", new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialogInterface, int i) {
                finish();
            }
        });


        builder.setNegativeButton("Quiero seguir la aventura", new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialogInterface, int i) {
                dialogInterface.cancel();
            }
        });

        AlertDialog dialog = builder.create();
        dialog.show();

    }

    @Override
    protected void onPause() {
        super.onPause();
        mp2.stop();
    }

    @Override
    protected void onResume() {
        super.onResume();
        mp2.start();
    }

    @Override
    protected void onRestoreInstanceState(Bundle savedInstanceState) {
        super.onRestoreInstanceState(savedInstanceState);

        mp2.start();
    }
}
