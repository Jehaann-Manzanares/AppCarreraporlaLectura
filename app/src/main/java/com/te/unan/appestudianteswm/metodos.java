package com.te.unan.appestudianteswm;


import android.app.Activity;
import android.app.Service;
import android.content.Intent;
import android.media.MediaPlayer;
import android.os.IBinder;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.widget.Toast;

import java.util.Timer;
import java.util.TimerTask;

import static com.te.unan.appestudianteswm.R.raw.mariobrosjump;

/**
 * Created by ESTUDIANTE on 22/2/2018.
 */

public class metodos extends AppCompatActivity {

    MediaPlayer mp,mp2;
    private TimerTask tarea;
    private Timer timer;

    public void  audio() {

        mp = new MediaPlayer();

        mp = MediaPlayer.create(this ,R.raw.mariobrosjump);
        mp.start();

    }


    public void audiofondo(){


        mp2 = MediaPlayer.create(this,R.raw.fondomenu);

        mp2.start();
    }
}
