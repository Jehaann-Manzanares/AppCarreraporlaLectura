package com.te.unan.appestudianteswm;

import android.app.FragmentManager;
import android.app.FragmentTransaction;
import android.content.Intent;
import android.support.design.widget.Snackbar;
import android.support.v4.app.Fragment;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.view.WindowManager;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.Toast;

public class Act_1_ini extends AppCompatActivity {

    boolean isFragmentDisplayed =false;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN,WindowManager.LayoutParams.FLAG_FULLSCREEN);
        setContentView(R.layout.activity_act_1_ini);

        Bundle bundle = getIntent().getExtras();
        String d1 = bundle.getString("id");



        switch (d1)
        {
            case "act1":
                fragmento simpleFragment = fragmento.newInstance();
                // TODO: Get the FragmentManager and start a transaction.


                android.support.v4.app.FragmentManager fragmentManager = getSupportFragmentManager();
                android.support.v4.app.FragmentTransaction fragmentTransaction = fragmentManager.beginTransaction();
                // TODO: Add the SimpleFragment.

                fragmentTransaction.add(R.id.fragment1,simpleFragment).addToBackStack(null).commit();

                break;

            case "act2":

                fragmento2 simplefragment2 = fragmento2.newInstance();
                // TODO: Get the FragmentManager and start a transaction.


                android.support.v4.app.FragmentManager fragmentManager2 = getSupportFragmentManager();
                android.support.v4.app.FragmentTransaction fragmentTransaction2 = fragmentManager2.beginTransaction();
                // TODO: Add the SimpleFragment.

                fragmentTransaction2.add(R.id.fragment2,simplefragment2).addToBackStack(null).commit();
                break;

            case "act3":

                fragmento3 simplefragment3 = fragmento3.newInstance();
                // TODO: Get the FragmentManager and start a transaction.


                android.support.v4.app.FragmentManager fragmentManager3 = getSupportFragmentManager();
                android.support.v4.app.FragmentTransaction fragmentTransaction3 = fragmentManager3.beginTransaction();
                // TODO: Add the SimpleFragment.

                fragmentTransaction3.add(R.id.fragment3,simplefragment3).addToBackStack(null).commit();
                break;

            case "act4":

                fragmento4 simplefragment4 = fragmento4.newInstance();
                // TODO: Get the FragmentManager and start a transaction.


                android.support.v4.app.FragmentManager fragmentManager4 = getSupportFragmentManager();
                android.support.v4.app.FragmentTransaction fragmentTransaction4 = fragmentManager4.beginTransaction();
                // TODO: Add the SimpleFragment.

                fragmentTransaction4.add(R.id.fragment4,simplefragment4).addToBackStack(null).commit();
                break;

            case "act5":

                fragmento5 simplefragment5 = fragmento5.newInstance();
                // TODO: Get the FragmentManager and start a transaction.


                android.support.v4.app.FragmentManager fragmentManager5 = getSupportFragmentManager();
                android.support.v4.app.FragmentTransaction fragmentTransaction5 = fragmentManager5.beginTransaction();
                // TODO: Add the SimpleFragment.

                fragmentTransaction5.add(R.id.fragment4,simplefragment5).addToBackStack(null).commit();
                break;

        }












    }

    @Override
    public void onBackPressed()
    {
        super.onBackPressed();
        finish();

    }

    public void displayFragment() {
        fragmento simpleFragment = fragmento.newInstance();
        // TODO: Get the FragmentManager and start a transaction.


        android.support.v4.app.FragmentManager fragmentManager = getSupportFragmentManager();
        android.support.v4.app.FragmentTransaction fragmentTransaction = fragmentManager.beginTransaction();
        // TODO: Add the SimpleFragment.

        fragmentTransaction.add(R.id.fragment1,simpleFragment).addToBackStack(null).commit();


    }

    public void closeFragment() {
        // Get the FragmentManager.
        android.support.v4.app.FragmentManager fragmentManager = getSupportFragmentManager();
        // Check to see if the fragment is already showing.
        fragmento simpleFragment = (fragmento) fragmentManager
                .findFragmentById(R.id.fragment1);
        if (simpleFragment != null) {
            // Create and commit the transaction to remove the fragment.
            android.support.v4.app.FragmentTransaction fragmentTransaction =
                    fragmentManager.beginTransaction();
            fragmentTransaction.remove(simpleFragment).commit();
        }
        // Update the Button text.

        // Set boolean flag to indicate fragment is closed.

        isFragmentDisplayed = false;

    }


}
