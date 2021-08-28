package com.android.trafficlight

import android.annotation.SuppressLint
import android.graphics.Color
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.os.Handler
import android.widget.Button
import com.google.android.material.card.MaterialCardView

class MainActivity : AppCompatActivity() {

    private val TRAFFIC_ORANGE_TIME: Long=3000
    private val TRAFFIC_RED_TIME: Long=5000

    var redCard1: MaterialCardView? = null
    var orangeCard1: MaterialCardView? = null
    var greenCard1: MaterialCardView? = null

    var redCard2: MaterialCardView? = null
    var orangeCard2: MaterialCardView? = null
    var greenCard2: MaterialCardView? = null

    var redCard3: MaterialCardView? = null
    var orangeCard3: MaterialCardView? = null
    var greenCard3: MaterialCardView? = null

    var redCard4: MaterialCardView? = null
    var orangeCard4: MaterialCardView? = null
    var greenCard4: MaterialCardView? = null

    var start: Button? = null

    var red: String = "#FF0000"
    var orange: String = "#FFC107"
    var green: String = "#5CCF0A"
    var light_red: String = "#CA8E8E"
    var light_orange: String = "#B89B88"
    var light_green: String = "#99AE8B"

    var lightPosition = 2

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        initalise()

        start?.setOnClickListener {
            changeLightColor(1)
            startLight()
        }

    }

    private fun initalise() {
        redCard1 = findViewById(R.id.mCardRed1)
        orangeCard1 = findViewById(R.id.mCardOrange1)
        greenCard1 = findViewById(R.id.mCardgreen1)

        redCard2 = findViewById(R.id.mCardRed2)
        orangeCard2 = findViewById(R.id.mCardOrange2)
        greenCard2 = findViewById(R.id.mCardgreen2)

        redCard3 = findViewById(R.id.mCardRed3)
        orangeCard3 = findViewById(R.id.mCardOrange3)
        greenCard3 = findViewById(R.id.mCardgreen3)

        redCard4 = findViewById(R.id.mCardRed4)
        orangeCard4 = findViewById(R.id.mCardOrange4)
        greenCard4 = findViewById(R.id.mCardgreen4)

        start = findViewById(R.id.btnStart)
    }

    fun startLight() {

        when (lightPosition) {

            1 -> {
                Handler().postDelayed(object : Runnable {
                    override fun run() {

                        changeToOrange(4)

                        Handler().postDelayed(object : Runnable {
                            override fun run() {
                                changeLightColor(1)
                            }

                        }, TRAFFIC_ORANGE_TIME)

                    }

                }, TRAFFIC_RED_TIME)
            }

            2 -> {
                Handler().postDelayed(object : Runnable {
                    override fun run() {

                        changeToOrange(1)

                        Handler().postDelayed(object : Runnable {
                            override fun run() {
                                changeLightColor(2)
                            }

                        }, TRAFFIC_ORANGE_TIME)

                    }

                }, TRAFFIC_RED_TIME)
            }

            3 -> {
                Handler().postDelayed(object : Runnable {
                    override fun run() {

                        changeToOrange(2)

                        Handler().postDelayed(object : Runnable {
                            override fun run() {
                                changeLightColor(3)
                            }

                        }, TRAFFIC_ORANGE_TIME)

                    }

                }, TRAFFIC_RED_TIME)
            }

            4 -> {
                Handler().postDelayed(object : Runnable {
                    override fun run() {

                        changeToOrange(3)

                        Handler().postDelayed(object : Runnable {
                            override fun run() {
                                changeLightColor(4)
                            }

                        }, TRAFFIC_ORANGE_TIME)

                    }

                }, TRAFFIC_RED_TIME)
            }

        }


    }

    private fun changeToOrange(pos: Int) {

        when(pos){

            1 ->{
                orangeCard1?.setCardBackgroundColor(Color.parseColor(orange))
                greenCard1?.setCardBackgroundColor(Color.parseColor(light_green))
            }
            2 ->{
                orangeCard2?.setCardBackgroundColor(Color.parseColor(orange))
                greenCard2?.setCardBackgroundColor(Color.parseColor(light_green))
            }
            3 ->{
                orangeCard3?.setCardBackgroundColor(Color.parseColor(orange))
                greenCard3?.setCardBackgroundColor(Color.parseColor(light_green))
            }
            4 ->{
                orangeCard4?.setCardBackgroundColor(Color.parseColor(orange))
                greenCard4?.setCardBackgroundColor(Color.parseColor(light_green))
            }

        }

    }

    @SuppressLint("NewApi")
    private fun changeLightColor(position: Int) {
        disableAll()
        if (position == 1) {
            redCard1?.setCardBackgroundColor(Color.parseColor(light_red))
            orangeCard1?.setCardBackgroundColor(Color.parseColor(light_orange))
            greenCard1?.setCardBackgroundColor(Color.parseColor(green))
            otherRed(1)
            lightPosition = 2
            startLight()
        } else if (position == 2) {
            redCard2?.setCardBackgroundColor(Color.parseColor(light_red))
            orangeCard2?.setCardBackgroundColor(Color.parseColor(light_orange))
            greenCard2?.setCardBackgroundColor(Color.parseColor(green))
            otherRed(2)
            lightPosition = 3
            startLight()
        } else if (position == 3) {
            redCard3?.setCardBackgroundColor(Color.parseColor(light_red))
            orangeCard3?.setCardBackgroundColor(Color.parseColor(light_orange))
            greenCard3?.setCardBackgroundColor(Color.parseColor(green))
            otherRed(3)
            lightPosition = 4
            startLight()
        } else if (position == 4) {
            redCard4?.setCardBackgroundColor(Color.parseColor(light_red))
            orangeCard4?.setCardBackgroundColor(Color.parseColor(light_orange))
            greenCard4?.setCardBackgroundColor(Color.parseColor(green))
            otherRed(4)
            lightPosition = 1
            startLight()
        }
    }

    private fun otherRed(pos: Int) {

        when (pos) {

            1 -> {
                redCard2?.setCardBackgroundColor(Color.parseColor(red))
                redCard3?.setCardBackgroundColor(Color.parseColor(red))
                redCard4?.setCardBackgroundColor(Color.parseColor(red))
            }
            2 -> {
                redCard1?.setCardBackgroundColor(Color.parseColor(red))
                redCard3?.setCardBackgroundColor(Color.parseColor(red))
                redCard4?.setCardBackgroundColor(Color.parseColor(red))
            }
            3 -> {
                redCard1?.setCardBackgroundColor(Color.parseColor(red))
                redCard2?.setCardBackgroundColor(Color.parseColor(red))
                redCard4?.setCardBackgroundColor(Color.parseColor(red))
            }
            4 -> {
                redCard1?.setCardBackgroundColor(Color.parseColor(red))
                redCard2?.setCardBackgroundColor(Color.parseColor(red))
                redCard3?.setCardBackgroundColor(Color.parseColor(red))
            }

        }


    }


    fun disableAll() {

        redCard1?.setCardBackgroundColor(Color.parseColor(light_red))
        orangeCard1?.setCardBackgroundColor(Color.parseColor(light_orange))
        greenCard1?.setCardBackgroundColor(Color.parseColor(light_green))

        redCard2?.setCardBackgroundColor(Color.parseColor(light_red))
        orangeCard2?.setCardBackgroundColor(Color.parseColor(light_orange))
        greenCard2?.setCardBackgroundColor(Color.parseColor(light_green))

        redCard3?.setCardBackgroundColor(Color.parseColor(light_red))
        orangeCard3?.setCardBackgroundColor(Color.parseColor(light_orange))
        greenCard3?.setCardBackgroundColor(Color.parseColor(light_green))

        redCard4?.setCardBackgroundColor(Color.parseColor(light_red))
        orangeCard4?.setCardBackgroundColor(Color.parseColor(light_orange))
        greenCard4?.setCardBackgroundColor(Color.parseColor(light_green))

    }

}