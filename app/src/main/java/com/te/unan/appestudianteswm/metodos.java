package com.te.unan.appestudianteswm;


import android.app.Activity;
import android.media.MediaPlayer;

import static com.te.unan.appestudianteswm.R.raw.mariobrosjump;

/**
 * Created by ESTUDIANTE on 22/2/2018.
 */

public class metodos  extends Activity{

    MediaPlayer mp;

    public void  audio() {

        mp = new MediaPlayer();

        mp = MediaPlayer.create(getApplicationContext(),R.raw.mariobrosjump);
        mp.start();

    }


}
