package com.exa.challengeproject

import android.graphics.Color.red
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.os.CountDownTimer
import android.view.View
import androidx.core.content.ContextCompat
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        startCountdownForNorth(0)
        startCountdownForSouth(10*1000)
        startCountdownForEast(20*1000)
        startCountdownForWest(30*1000)
    }

    private fun startCountdownForNorth(totalTime:Int){
        val timer= object : CountDownTimer(totalTime.toLong(),1000){
            override fun onTick(millisUntilFinished: Long) {
                if ((millisUntilFinished / 1000).toInt() == 0) {
                    northLightCounter.text = "GO"
                    northLight.setBackgroundColor(ContextCompat.getColor(this@MainActivity,R.color.green))
                } else {
                    northLightCounter.text = (millisUntilFinished / 1000).toString()
                }
            }
            override fun onFinish() {
                northLight.setBackgroundColor(ContextCompat.getColor(this@MainActivity,R.color.green))
                val greenTimer=object : CountDownTimer(10*1000,1000){
                    override fun onTick(millisUntilFinished: Long) {
                        if ((millisUntilFinished/1000).toInt() == 3){
                            northLight.setBackgroundColor(ContextCompat.getColor(this@MainActivity,R.color.yellow))
                        }

                        if ((millisUntilFinished/1000).toInt() == 0){
                            northLight.setBackgroundColor(ContextCompat.getColor(this@MainActivity,R.color.red))
                            northLightCounter.text="STOP"
                            return
                        }


                        northLightCounter.text=(millisUntilFinished/1000).toString()
                    }

                    override fun onFinish() {
                        northLight.setBackgroundColor(ContextCompat.getColor(this@MainActivity,R.color.red))
                        startCountdownForNorth(30*1000)

                    }

                }

                greenTimer.start()
            }

        }

        timer.start()
    }

    private fun startCountdownForSouth(totalTime:Int){
        val timer= object : CountDownTimer(totalTime.toLong(),1000){
            override fun onTick(millisUntilFinished: Long) {
                if ((millisUntilFinished / 1000).toInt() == 0) {
                    southLightCounter.text = "GO"
                    southtLight.setBackgroundColor(ContextCompat.getColor(this@MainActivity,R.color.green))
                } else {
                    southLightCounter.text = (millisUntilFinished / 1000).toString()
                }
            }
            override fun onFinish() {
                southtLight.setBackgroundColor(ContextCompat.getColor(this@MainActivity,R.color.green))

                val greenTimer=object : CountDownTimer(10*1000,1000){
                    override fun onTick(millisUntilFinished: Long) {
                        if ((millisUntilFinished/1000).toInt() == 3){
                            southtLight.setBackgroundColor(ContextCompat.getColor(this@MainActivity,R.color.yellow))
                        }

                        if ((millisUntilFinished/1000).toInt() == 0){
                            southtLight.setBackgroundColor(ContextCompat.getColor(this@MainActivity,R.color.red))
                            southLightCounter.text="STOP"
                            return
                        }

                        southLightCounter.text=(millisUntilFinished/1000).toString()
                    }

                    override fun onFinish() {
                        southtLight.setBackgroundColor(ContextCompat.getColor(this@MainActivity,R.color.red))
                        startCountdownForSouth(30*1000)
                    }

                }

                greenTimer.start()
            }

        }

        timer.start()
    }

    private fun startCountdownForEast(totalTime:Int){
        val timer= object : CountDownTimer(totalTime.toLong(),1000){
            override fun onTick(millisUntilFinished: Long) {
                if ((millisUntilFinished / 1000).toInt() == 0) {
                    eastLightCounter.text = "GO"
                    eastLight.setBackgroundColor(ContextCompat.getColor(this@MainActivity,R.color.green))
                } else {
                    eastLightCounter.text = (millisUntilFinished / 1000).toString()
                }
            }
            override fun onFinish() {
                eastLight.setBackgroundColor(ContextCompat.getColor(this@MainActivity,R.color.green))

                val greenTimer=object : CountDownTimer(10*1000,1000){
                    override fun onTick(millisUntilFinished: Long) {
                        if ((millisUntilFinished/1000).toInt() == 3){
                            eastLight.setBackgroundColor(ContextCompat.getColor(this@MainActivity,R.color.yellow))
                        }

                        if ((millisUntilFinished/1000).toInt() == 0){
                            eastLight.setBackgroundColor(ContextCompat.getColor(this@MainActivity,R.color.red))
                            eastLightCounter.text="STOP"
                            return
                        }

                        eastLightCounter.text=(millisUntilFinished/1000).toString()
                    }

                    override fun onFinish() {
                        eastLight.setBackgroundColor(ContextCompat.getColor(this@MainActivity,R.color.red))
                        startCountdownForEast(30*1000)
                    }

                }

                greenTimer.start()
            }

        }

        timer.start()
    }

    private fun startCountdownForWest(totalTime:Int){

        val timer= object : CountDownTimer(totalTime.toLong(),1000){
            override fun onTick(millisUntilFinished: Long) {
                if ((millisUntilFinished / 1000).toInt() == 0) {
                    westLightCounter.text = "GO"
                    westLight.setBackgroundColor(ContextCompat.getColor(this@MainActivity,R.color.green))
                } else {
                    westLightCounter.text = (millisUntilFinished / 1000).toString()
                }
            }
            override fun onFinish() {

                westLight.setBackgroundColor(ContextCompat.getColor(this@MainActivity,R.color.green))

                val greenTimer=object : CountDownTimer(10*1000,1000){
                    override fun onTick(millisUntilFinished: Long) {
                        if ((millisUntilFinished/1000).toInt() == 3){
                            westLight.setBackgroundColor(ContextCompat.getColor(this@MainActivity,R.color.yellow))
                        }

                        if ((millisUntilFinished/1000).toInt() == 0){
                            westLight.setBackgroundColor(ContextCompat.getColor(this@MainActivity,R.color.red))
                            westLightCounter.text="STOP"
                            return
                        }

                        westLightCounter.text=(millisUntilFinished/1000).toString()
                    }

                    override fun onFinish() {
                        westLight.setBackgroundColor(ContextCompat.getColor(this@MainActivity,R.color.red))
                        startCountdownForWest(30*1000)
                    }

                }

                greenTimer.start()
            }

        }

        timer.start()

    }

}