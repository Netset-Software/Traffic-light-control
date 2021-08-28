package com.u.myapplication

import android.os.Bundle
import android.os.CountDownTimer
import android.widget.ImageView
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity


class MainActivity : AppCompatActivity() {

    var textView1: TextView? = null
    var textView2: TextView? = null
    var textView3: TextView? = null
    var textView4: TextView? = null
    var imageView1: ImageView? = null
    var imageView2: ImageView? = null
    var imageView3: ImageView? = null
    var imageView4: ImageView? = null
    var imageView5: ImageView? = null
    var imageView6: ImageView? = null
    var imageView7: ImageView? = null
    var imageView8: ImageView? = null
    var imageView9: ImageView? = null
    var imageView10: ImageView? = null
    var imageView11: ImageView? = null
    var imageView12: ImageView? = null


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        textView1 = findViewById(R.id.textView1)
        textView2 = findViewById(R.id.textView2)
        textView3 = findViewById(R.id.textView3)
        textView4 = findViewById(R.id.textView4)
        imageView1 = findViewById(R.id.imageView1)
        imageView2 = findViewById(R.id.imageView2)
        imageView3 = findViewById(R.id.imageView3)
        imageView4 = findViewById(R.id.imageView4)
        imageView5 = findViewById(R.id.imageView5)
        imageView6 = findViewById(R.id.imageView6)
        imageView7 = findViewById(R.id.imageView7)
        imageView8 = findViewById(R.id.imageView8)
        imageView9 = findViewById(R.id.imageView9)
        imageView10 = findViewById(R.id.imageView10)
        imageView11 = findViewById(R.id.imageView11)
        imageView12 = findViewById(R.id.imageView12)

        startWest0()
        startSouth0()
        startNorth0()
        startEast2()

    }

    private fun startWest0() {
        textView2!!.text = ""
        textView2!!.setTextColor(resources.getColor(android.R.color.holo_red_light))
        imageView4!!.setImageResource(R.drawable.shadow)
        imageView5!!.setImageResource(R.drawable.shadow)
        imageView6!!.setImageResource(R.drawable.shadow)

    }

    private fun startSouth0() {
        textView3!!.text = ""
        textView3!!.setTextColor(resources.getColor(android.R.color.holo_red_light))
        imageView7!!.setImageResource(R.drawable.shadow)
        imageView8!!.setImageResource(R.drawable.shadow)
        imageView9!!.setImageResource(R.drawable.shadow)

    }

    private fun startNorth0() {
        textView4!!.text = ""
        textView4!!.setTextColor(resources.getColor(android.R.color.holo_red_light))
        imageView10!!.setImageResource(R.drawable.shadow)
        imageView11!!.setImageResource(R.drawable.shadow)
        imageView12!!.setImageResource(R.drawable.shadow)

    }

    private fun startEast2() {
        textView1!!.setTextColor(resources.getColor(android.R.color.holo_green_dark))
        textView4!!.setText("")
        imageView3!!.setImageResource(R.drawable.remove_shadow)
        imageView2!!.setImageResource(R.drawable.shadow)
        imageView1!!.setImageResource(R.drawable.shadow)
        imageView12!!.setImageResource(R.drawable.shadow)

        imageView4!!.setImageResource(R.drawable.remove_shadow)
        imageView7!!.setImageResource(R.drawable.remove_shadow)
        imageView10!!.setImageResource(R.drawable.remove_shadow)

        object : CountDownTimer(30000, 1000) {
            override fun onTick(millisUntilFinished: Long) {
                val time = millisUntilFinished / 1000
                textView1!!.text = time.toString()


                if (textView1!!.text.toString().equals("4")) {
                    startWest1()
                }

            }

            override fun onFinish() {
                startWest2()

            }
        }.start()
    }

    private fun startWest1() {
        textView2!!.setTextColor(resources.getColor(android.R.color.holo_orange_light))
        imageView5!!.setImageResource(R.drawable.remove_shadow)
        imageView4!!.setImageResource(R.drawable.shadow)
        imageView6!!.setImageResource(R.drawable.shadow)

        object : CountDownTimer(3000, 1000) {
            override fun onTick(millisUntilFinished: Long) {
                val time = millisUntilFinished / 1000
                textView2!!.text = time.toString()
            }

            override fun onFinish() {

            }
        }.start()
    }

    private fun startWest2() {
        textView2!!.setTextColor(resources.getColor(android.R.color.holo_green_dark))
        textView1!!.setText("")
        imageView6!!.setImageResource(R.drawable.remove_shadow)
        imageView5!!.setImageResource(R.drawable.shadow)
        imageView4!!.setImageResource(R.drawable.shadow)
        imageView3!!.setImageResource(R.drawable.shadow)

        imageView1!!.setImageResource(R.drawable.remove_shadow)
        imageView7!!.setImageResource(R.drawable.remove_shadow)
        imageView10!!.setImageResource(R.drawable.remove_shadow)


        object : CountDownTimer(30000, 1000) {
            override fun onTick(millisUntilFinished: Long) {
                val time = millisUntilFinished / 1000
                textView2!!.text = time.toString()

                if (textView2!!.text.toString().equals("4")) {
                    startSouth1()
                }
            }

            override fun onFinish() {
                startSouth2()
            }
        }.start()
    }

    private fun startSouth1() {
        textView3!!.setTextColor(resources.getColor(android.R.color.holo_orange_light))
        imageView8!!.setImageResource(R.drawable.remove_shadow)
        imageView7!!.setImageResource(R.drawable.shadow)
        imageView9!!.setImageResource(R.drawable.shadow)

        object : CountDownTimer(3000, 1000) {
            override fun onTick(millisUntilFinished: Long) {
                val time = millisUntilFinished / 1000
                textView3!!.text = time.toString()
            }

            override fun onFinish() {

            }
        }.start()
    }

    private fun startSouth() {
        textView3!!.setTextColor(resources.getColor(android.R.color.holo_red_light))
        textView2!!.setText("")
        imageView7!!.setImageResource(R.drawable.remove_shadow)
        imageView8!!.setImageResource(R.drawable.shadow)
        imageView9!!.setImageResource(R.drawable.shadow)
        imageView4!!.setImageResource(R.drawable.shadow)
        object : CountDownTimer(30000, 1000) {
            override fun onTick(millisUntilFinished: Long) {
                val time = millisUntilFinished / 1000
                textView3!!.text = time.toString()
            }

            override fun onFinish() {
                startNorth()
            }
        }.start()
    }

    private fun startNorth() {
        textView4!!.setTextColor(resources.getColor(android.R.color.holo_red_light))
        textView3!!.setText("")
        imageView10!!.setImageResource(R.drawable.remove_shadow)
        imageView11!!.setImageResource(R.drawable.shadow)
        imageView12!!.setImageResource(R.drawable.shadow)
        imageView7!!.setImageResource(R.drawable.shadow)
        object : CountDownTimer(30000, 1000) {
            override fun onTick(millisUntilFinished: Long) {
                val time = millisUntilFinished / 1000
                textView4!!.text = time.toString()
            }

            override fun onFinish() {
                startWest2()

            }
        }.start()
    }

    private fun startEast0() {
        textView1!!.text = ""
        textView1!!.setTextColor(resources.getColor(android.R.color.holo_red_light))
        imageView1!!.setImageResource(R.drawable.remove_shadow)
        imageView2!!.setImageResource(R.drawable.shadow)
        imageView3!!.setImageResource(R.drawable.shadow)
    }

    private fun startSouth2() {
        textView3!!.setTextColor(resources.getColor(android.R.color.holo_green_dark))
        textView2!!.text = ""
        imageView9!!.setImageResource(R.drawable.remove_shadow)
        imageView8!!.setImageResource(R.drawable.shadow)
        imageView7!!.setImageResource(R.drawable.shadow)
        imageView6!!.setImageResource(R.drawable.shadow)

        imageView1!!.setImageResource(R.drawable.remove_shadow)
        imageView4!!.setImageResource(R.drawable.remove_shadow)
        imageView10!!.setImageResource(R.drawable.remove_shadow)

        object : CountDownTimer(30000, 1000) {
            override fun onTick(millisUntilFinished: Long) {
                val time = millisUntilFinished / 1000
                textView3!!.text = time.toString()

                if (textView3!!.text.toString().equals("4")) {
                    startNorth1()
                }


            }

            override fun onFinish() {
                startNorth2()
            }
        }.start()
    }

    private fun startNorth1() {
        textView4!!.setTextColor(resources.getColor(android.R.color.holo_orange_light))
        imageView11!!.setImageResource(R.drawable.remove_shadow)
        imageView10!!.setImageResource(R.drawable.shadow)
        imageView12!!.setImageResource(R.drawable.shadow)

        object : CountDownTimer(3000, 1000) {
            override fun onTick(millisUntilFinished: Long) {
                val time = millisUntilFinished / 1000
                textView4!!.text = time.toString()
            }

            override fun onFinish() {

            }
        }.start()
    }

    private fun startNorth2() {
        textView4!!.setTextColor(resources.getColor(android.R.color.holo_green_dark))
        textView3!!.text = ""
        imageView12!!.setImageResource(R.drawable.remove_shadow)
        imageView11!!.setImageResource(R.drawable.shadow)
        imageView10!!.setImageResource(R.drawable.shadow)
        imageView9!!.setImageResource(R.drawable.shadow)

        imageView1!!.setImageResource(R.drawable.remove_shadow)
        imageView4!!.setImageResource(R.drawable.remove_shadow)
        imageView7!!.setImageResource(R.drawable.remove_shadow)

        object : CountDownTimer(30000, 1000) {
            override fun onTick(millisUntilFinished: Long) {
                val time = millisUntilFinished / 1000
                textView4!!.text = time.toString()

                if (textView4!!.text.toString().equals("4")) {
                    startNorth1()
                }

            }

            override fun onFinish() {
                startEast2()
            }
        }.start()
    }

    private fun startEast() {
        textView1!!.setTextColor(resources.getColor(android.R.color.holo_red_light))
        imageView1!!.setImageResource(R.drawable.remove_shadow)
        imageView2!!.setImageResource(R.drawable.shadow)
        imageView3!!.setImageResource(R.drawable.shadow)
        object : CountDownTimer(30000, 1000) {
            override fun onTick(millisUntilFinished: Long) {
                val time = millisUntilFinished / 1000
                textView1!!.text = time.toString()
            }

            override fun onFinish() {

            }
        }.start()
    }

    private fun startEast1() {
        textView1!!.setTextColor(resources.getColor(android.R.color.holo_orange_light))
        imageView2!!.setImageResource(R.drawable.remove_shadow)
        imageView1!!.setImageResource(R.drawable.shadow)
        imageView3!!.setImageResource(R.drawable.shadow)

        object : CountDownTimer(30000, 1000) {
            override fun onTick(millisUntilFinished: Long) {
                val time = millisUntilFinished / 1000
                textView1!!.text = time.toString()
            }

            override fun onFinish() {
                startEast2()
            }
        }.start()
    }

    private fun startWest() {
        startEast0()
        textView2!!.setTextColor(resources.getColor(android.R.color.holo_red_light))
        imageView4!!.setImageResource(R.drawable.remove_shadow)
        imageView5!!.setImageResource(R.drawable.shadow)
        imageView6!!.setImageResource(R.drawable.shadow)

        object : CountDownTimer(30000, 1000) {
            override fun onTick(millisUntilFinished: Long) {
                val time = millisUntilFinished / 1000
                textView2!!.text = time.toString()
            }

            override fun onFinish() {
                startSouth()
            }
        }.start()
    }


}


