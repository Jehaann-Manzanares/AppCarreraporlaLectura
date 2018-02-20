package com.te.unan.appestudianteswm;

import android.content.Intent;
import android.os.Bundle;
        import android.support.v4.app.Fragment;
        import android.view.LayoutInflater;
        import android.view.View;
        import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageView;

import com.te.unan.appestudianteswm.R;

public class fragmento extends Fragment {


    /**
     * Nueva instancia del fragmento
     * */
    public static fragmento newInstance() {


        return new fragmento();
    }



    /**
     * La interfaz del fragmento
     * */


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {


        View view = inflater.inflate(R.layout.fragment_mifragmento, container, false);


        ImageView btnact1 = (ImageView) view.findViewById(R.id.btnplay1);
        btnact1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                Intent intent = new Intent(getContext(),Main2Activity.class);
                intent.putExtra("URL","file:///android_asset/Nivel1/desorden-aulas-presentacion/actividad.html");
                startActivity(intent);
                getActivity().finish();


            }
        });


        return view;
    }








}

