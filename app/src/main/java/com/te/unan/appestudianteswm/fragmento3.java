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

public class fragmento3 extends Fragment {


    /**
     * Nueva instancia del fragmento
     */
    public static fragmento3 newInstance() {


        return new fragmento3();
    }


    /**
     * La interfaz del fragmento
     */


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {

        View view = inflater.inflate(R.layout.fragment_fragmento3, container, false);

        ImageView btnplayB = (ImageView) view.findViewById(R.id.btnplay3);

        btnplayB.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                Intent intent = new Intent(getContext(), Main2Activity.class);
                intent.putExtra("URL", "file:///android_asset/Nivel1/el-desorden-de-las-aulas-mapa-interactivo/actividad.html");
                startActivity(intent);
                getActivity().finish();
            }
        });


        return view;
    }


}
