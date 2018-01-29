package com.te.unan.appestudianteswm;

import android.os.Bundle;
        import android.support.v4.app.Fragment;
        import android.view.LayoutInflater;
        import android.view.View;
        import android.view.ViewGroup;

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
        return inflater.inflate(R.layout.fragment_mifragmento, container, false);
    }

}