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




    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN,WindowManager.LayoutParams.FLAG_FULLSCREEN);
        setContentView(R.layout.activity_act_1_ini);

        Bundle bundle = getIntent().getExtras();
        String d1 = bundle.getString("id");

        android.support.v4.app.FragmentManager fragmentManager = getSupportFragmentManager();
        android.support.v4.app.FragmentTransaction fragmentTransaction = fragmentManager.beginTransaction();



        switch (d1)
        {
            case "act1":
                fragmento simpleFragment = fragmento.newInstance();
                // TODO: Get the FragmentManager and start a transaction.
                // TODO: Add the SimpleFragment.
                fragmentTransaction.add(R.id.fragment1,simpleFragment).addToBackStack(null).commit();

                break;

            case "act2":

                fragmento2 simplefragment2 = fragmento2.newInstance();

                fragmentTransaction.add(R.id.fragment2,simplefragment2).addToBackStack(null).commit();
                break;

            case "act3":

                fragmento3 simplefragment3 = fragmento3.newInstance();

                fragmentTransaction.add(R.id.fragment3,simplefragment3).addToBackStack(null).commit();
                break;

            case "act4":

                fragmento4 simplefragment4 = fragmento4.newInstance();

                fragmentTransaction.add(R.id.fragment4,simplefragment4).addToBackStack(null).commit();
                break;

            case "act5":

                fragmento5 simplefragment5 = fragmento5.newInstance();

                fragmentTransaction.add(R.id.fragment5,simplefragment5).addToBackStack(null).commit();
                break;

            case "act6":

                fragmento6 simpleFragment6 = fragmento6.newInstance();

                fragmentTransaction.add(R.id.fragment6,simpleFragment6).addToBackStack(null).commit();

                break;

            case "act7":

                fragmento7 simpleFragment7 = fragmento7.newInstance();

                fragmentTransaction.add(R.id.fragment7,simpleFragment7).addToBackStack(null).commit();

                break;
            case "act8":

                fragmento8 simpleFragment8 = fragmento8.newInstance();

                fragmentTransaction.add(R.id.fragment8,simpleFragment8).addToBackStack(null).commit();

                break;
            case "act9":

                fragmento9 simpleFragment9 = fragmento9.newInstance();

                fragmentTransaction.add(R.id.fragment9,simpleFragment9).addToBackStack(null).commit();

                break;
            case "act1_n2":

                fragmento10 simpleFragment10 = fragmento10.newInstance();

                fragmentTransaction.add(R.id.fragment10,simpleFragment10).addToBackStack(null).commit();

                break;
            case "act2_n2":

                fragmento11 simpleFragment11 = fragmento11.newInstance();

                fragmentTransaction.add(R.id.fragment11,simpleFragment11).addToBackStack(null).commit();

                break;

            case "act3_n2":

                fragmento12 simpleFragment12 = fragmento12.newInstance();

                fragmentTransaction.add(R.id.fragment12,simpleFragment12).addToBackStack(null).commit();

                break;

            case "act4_n2":

                fragmento13 simpleFragment13 = fragmento13.newInstance();

                fragmentTransaction.add(R.id.fragment13,simpleFragment13).addToBackStack(null).commit();

                break;
            case "act5_n2":

                fragmento14 simpleFragment14 = fragmento14.newInstance();

                fragmentTransaction.add(R.id.fragment14,simpleFragment14).addToBackStack(null).commit();

                break;
            case "act6_n2":

                fragmento15 simpleFragment15 = fragmento15.newInstance();

                fragmentTransaction.add(R.id.fragment15,simpleFragment15).addToBackStack(null).commit();

                break;
            case "act7_n2":

                fragmento16 simpleFragment16 = fragmento16.newInstance();

                fragmentTransaction.add(R.id.fragment16,simpleFragment16).addToBackStack(null).commit();

                break;
            case "act8_n2":

                fragmento17 simpleFragment17 = fragmento17.newInstance();

                fragmentTransaction.add(R.id.fragment17,simpleFragment17).addToBackStack(null).commit();

                break;
            case "act9_n2":

                fragmento18 simpleFragment18 = fragmento18.newInstance();

                fragmentTransaction.add(R.id.fragment18,simpleFragment18).addToBackStack(null).commit();

                break;
            case "act10_n2":

                fragmento19 simpleFragment19 = fragmento19.newInstance();

                fragmentTransaction.add(R.id.fragment19,simpleFragment19).addToBackStack(null).commit();

                break;

            case "act11_n2":

                fragmento20 simpleFragment20 = fragmento20.newInstance();

                fragmentTransaction.add(R.id.fragment20,simpleFragment20).addToBackStack(null).commit();

                break;







        }












    }

    @Override
    public void onBackPressed()
    {
        super.onBackPressed();
        finish();

    }

   /* public void displayFragment() {
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
*/

}
