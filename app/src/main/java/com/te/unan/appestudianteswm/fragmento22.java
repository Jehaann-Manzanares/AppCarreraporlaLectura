package com.te.unan.appestudianteswm;


import android.content.Intent;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;

/**
 * Created by Jca on 19/2/2018.
 */

public class fragmento22 extends Fragment{


    /**
     * Nueva instancia del fragmento
     */
    public static fragmento22 newInstance() {


        return new fragmento22();
    }


/**
 * La interfaz del fragmento
 */

@Override
public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {

    View view = inflater.inflate(R.layout.fragmento22, container, false);

    ImageView btnplayB = (ImageView) view.findViewById(R.id.btnplay22);

    btnplayB.setOnClickListener(new View.OnClickListener() {
        @Override
        public void onClick(View view) {

            Intent intent = new Intent(getContext(), Main2Activity.class);
            intent.putExtra("URL", "file:///android_asset/Nivel3/actividad2complete/actividad.html");
            startActivity(intent);
            getActivity().finish();
        }
    });


    return view;
}

}