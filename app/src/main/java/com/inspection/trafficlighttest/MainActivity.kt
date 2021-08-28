package com.inspection.trafficlighttest

import android.os.Bundle
import android.os.CountDownTimer
import android.view.View
import android.widget.Button
import android.widget.ImageView
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {
    /**
     * Lights Top Layout
     **/
    var ivTopRed: ImageView? = null
    var ivTopYellow: ImageView? = null
    var ivTopGreen: ImageView? = null

    /**
     * Light bottom Layout
     **/
    var ivBottomRed: ImageView? = null
    var ivBottomYellow: ImageView? = null
    var ivBottomGreen: ImageView? = null

    /**
     * Light Left Layout
     **/
    var ivLeftRed: ImageView? = null
    var ivLeftYellow: ImageView? = null
    var ivLeftGreen: ImageView? = null

    /**
     * Light Right Layout
     **/
    var ivRightRed: ImageView? = null
    var ivRightYellow: ImageView? = null
    var ivRightGreen: ImageView? = null


    enum class LightStatus {
        none, top, bottom, left, right
    }

    enum class CurrentLight {
        red, green, yellow
    }

    var tvCountDown: TextView? = null
    var btnStart:Button?=null

    var redTimerCount = (.5 * 10000).toLong()
    var yellowTimerCount = (.2 * 10000).toLong()
    var greenTimerCount = (1 * 10000).toLong()


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        initView()
    }

    private fun initView() {
        tvCountDown = findViewById(R.id.tvCountDown)
        btnStart = findViewById(R.id.btnStart)

        ivTopRed = findViewById(R.id.topRed)
        ivTopYellow = findViewById(R.id.topYellow)
        ivTopGreen = findViewById(R.id.topGreen)
        /**********************************/
        ivBottomRed = findViewById(R.id.bottomRed)
        ivBottomYellow = findViewById(R.id.bottomYellow)
        ivBottomGreen = findViewById(R.id.bottomGreen)
        /**********************************/
        ivLeftRed = findViewById(R.id.leftRed)
        ivLeftYellow = findViewById(R.id.leftYellow)
        ivLeftGreen = findViewById(R.id.leftGreen)
        /**********************************/
        ivRightRed = findViewById(R.id.rightRed)
        ivRightYellow = findViewById(R.id.rightYellow)
        ivRightGreen = findViewById(R.id.rightGreen)
    }

    fun getLightSequence(): LightStatus {
        return if (previousLightSequence == LightStatus.none) {
            LightStatus.top
        } else if (previousLightSequence == LightStatus.top) {
            LightStatus.right
        } else if (previousLightSequence == LightStatus.right) {
            LightStatus.bottom
        } else if (previousLightSequence == LightStatus.bottom) {
            LightStatus.left
        } else {
            LightStatus.top
        }
    }

    var previousLightSequence = LightStatus.none
    fun StartLightSystem(view: View) {
        btnStart?.visibility = View.GONE
        val seq = getLightSequence()
        previousLightSequence = seq
        ivTopRed?.setImageResource(R.drawable.bg_outline_circle_red)
        ivTopYellow?.setImageResource(R.drawable.bg_outline_circle_yellow)
        ivTopGreen?.setImageResource(R.drawable.green_circle_bg)
        ivBottomRed?.setImageResource(R.drawable.red_circle_bg)
        ivBottomYellow?.setImageResource(R.drawable.bg_outline_circle_yellow)
        ivBottomGreen?.setImageResource(R.drawable.bg_outline_circle_green)

        ivLeftRed?.setImageResource(R.drawable.red_circle_bg)
        ivLeftYellow?.setImageResource(R.drawable.bg_outline_circle_yellow)
        ivLeftGreen?.setImageResource(R.drawable.bg_outline_circle_green)

        ivRightRed?.setImageResource(R.drawable.red_circle_bg)
        ivRightYellow?.setImageResource(R.drawable.bg_outline_circle_yellow)
        ivRightGreen?.setImageResource(R.drawable.bg_outline_circle_green)
        tvCountDown?.animate()?.alpha(1f)
        greenTimer()
    }

    private fun playWithSequence(mCurrentLight: CurrentLight) {
        if (previousLightSequence == LightStatus.top) {
            ivBottomRed?.setImageResource(R.drawable.red_circle_bg)
            ivBottomYellow?.setImageResource(R.drawable.bg_outline_circle_yellow)
            ivBottomGreen?.setImageResource(R.drawable.bg_outline_circle_green)

            ivLeftRed?.setImageResource(R.drawable.red_circle_bg)
            ivLeftYellow?.setImageResource(R.drawable.bg_outline_circle_yellow)
            ivLeftGreen?.setImageResource(R.drawable.bg_outline_circle_green)

            ivRightRed?.setImageResource(R.drawable.red_circle_bg)
            ivRightYellow?.setImageResource(R.drawable.bg_outline_circle_yellow)
            ivRightGreen?.setImageResource(R.drawable.bg_outline_circle_green)

            if (mCurrentLight == CurrentLight.green) {
                ivTopRed?.setImageResource(R.drawable.red_circle_bg)
                ivTopYellow?.setImageResource(R.drawable.bg_outline_circle_yellow)
                ivTopGreen?.setImageResource(R.drawable.bg_outline_circle_green)
            } else if (mCurrentLight == CurrentLight.yellow) {
                ivTopRed?.setImageResource(R.drawable.bg_outline_circle_red)
                ivTopYellow?.setImageResource(R.drawable.yellow_circle_bg)
                ivTopGreen?.setImageResource(R.drawable.bg_outline_circle_green)
            } else {
                ivTopRed?.setImageResource(R.drawable.bg_outline_circle_red)
                ivTopYellow?.setImageResource(R.drawable.bg_outline_circle_yellow)
                ivTopGreen?.setImageResource(R.drawable.green_circle_bg)
            }
        } else if (previousLightSequence == LightStatus.bottom) {
            ivTopRed?.setImageResource(R.drawable.red_circle_bg)
            ivTopYellow?.setImageResource(R.drawable.bg_outline_circle_yellow)
            ivTopGreen?.setImageResource(R.drawable.bg_outline_circle_green)

            ivLeftRed?.setImageResource(R.drawable.red_circle_bg)
            ivLeftYellow?.setImageResource(R.drawable.bg_outline_circle_yellow)
            ivLeftGreen?.setImageResource(R.drawable.bg_outline_circle_green)

            ivRightRed?.setImageResource(R.drawable.red_circle_bg)
            ivRightYellow?.setImageResource(R.drawable.bg_outline_circle_yellow)
            ivRightGreen?.setImageResource(R.drawable.bg_outline_circle_green)

            if (mCurrentLight == CurrentLight.green) {
                ivBottomRed?.setImageResource(R.drawable.red_circle_bg)
                ivBottomYellow?.setImageResource(R.drawable.bg_outline_circle_yellow)
                ivBottomGreen?.setImageResource(R.drawable.bg_outline_circle_green)
            } else if (mCurrentLight == CurrentLight.yellow) {
                ivBottomRed?.setImageResource(R.drawable.bg_outline_circle_red)
                ivBottomYellow?.setImageResource(R.drawable.yellow_circle_bg)
                ivBottomGreen?.setImageResource(R.drawable.bg_outline_circle_green)
            } else {
                ivBottomRed?.setImageResource(R.drawable.bg_outline_circle_red)
                ivBottomYellow?.setImageResource(R.drawable.bg_outline_circle_yellow)
                ivBottomGreen?.setImageResource(R.drawable.green_circle_bg)
            }
        } else if (previousLightSequence == LightStatus.left) {
            ivTopRed?.setImageResource(R.drawable.red_circle_bg)
            ivTopYellow?.setImageResource(R.drawable.bg_outline_circle_yellow)
            ivTopGreen?.setImageResource(R.drawable.bg_outline_circle_green)

            ivBottomRed?.setImageResource(R.drawable.red_circle_bg)
            ivBottomYellow?.setImageResource(R.drawable.bg_outline_circle_yellow)
            ivBottomGreen?.setImageResource(R.drawable.bg_outline_circle_green)

            ivRightRed?.setImageResource(R.drawable.red_circle_bg)
            ivRightYellow?.setImageResource(R.drawable.bg_outline_circle_yellow)
            ivRightGreen?.setImageResource(R.drawable.bg_outline_circle_green)

            if (mCurrentLight == CurrentLight.green) {
                ivLeftRed?.setImageResource(R.drawable.red_circle_bg)
                ivLeftYellow?.setImageResource(R.drawable.bg_outline_circle_yellow)
                ivLeftGreen?.setImageResource(R.drawable.bg_outline_circle_green)

            } else if (mCurrentLight == CurrentLight.yellow) {
                ivLeftRed?.setImageResource(R.drawable.bg_outline_circle_red)
                ivLeftYellow?.setImageResource(R.drawable.yellow_circle_bg)
                ivLeftGreen?.setImageResource(R.drawable.bg_outline_circle_green)
            } else {
                ivLeftRed?.setImageResource(R.drawable.bg_outline_circle_red)
                ivLeftYellow?.setImageResource(R.drawable.bg_outline_circle_yellow)
                ivLeftGreen?.setImageResource(R.drawable.green_circle_bg)
            }
        } else if (previousLightSequence == LightStatus.right) {
            ivTopRed?.setImageResource(R.drawable.red_circle_bg)
            ivTopYellow?.setImageResource(R.drawable.bg_outline_circle_yellow)
            ivTopGreen?.setImageResource(R.drawable.bg_outline_circle_green)

            ivBottomRed?.setImageResource(R.drawable.red_circle_bg)
            ivBottomYellow?.setImageResource(R.drawable.bg_outline_circle_yellow)
            ivBottomGreen?.setImageResource(R.drawable.bg_outline_circle_green)

            ivLeftRed?.setImageResource(R.drawable.red_circle_bg)
            ivLeftYellow?.setImageResource(R.drawable.bg_outline_circle_yellow)
            ivLeftGreen?.setImageResource(R.drawable.bg_outline_circle_green)

            if (mCurrentLight == CurrentLight.green) {
                ivRightRed?.setImageResource(R.drawable.red_circle_bg)
                ivRightYellow?.setImageResource(R.drawable.bg_outline_circle_yellow)
                ivRightGreen?.setImageResource(R.drawable.bg_outline_circle_green)

            } else if (mCurrentLight == CurrentLight.yellow) {
                ivRightRed?.setImageResource(R.drawable.bg_outline_circle_red)
                ivRightYellow?.setImageResource(R.drawable.yellow_circle_bg)
                ivRightGreen?.setImageResource(R.drawable.bg_outline_circle_green)
            } else {
                ivRightRed?.setImageResource(R.drawable.bg_outline_circle_red)
                ivRightYellow?.setImageResource(R.drawable.bg_outline_circle_yellow)
                ivRightGreen?.setImageResource(R.drawable.green_circle_bg)
            }
        }
    }

    fun greenTimer() {
        val greenTimer = object : CountDownTimer(greenTimerCount, 1000) {
            override fun onTick(millisUntilFinished: Long) {
                val tick = (millisUntilFinished / 1000)
                tvCountDown?.text = "${tick}"
            }

            override fun onFinish() {
                val seq = getLightSequence()
                previousLightSequence = seq
                playWithSequence(CurrentLight.red)
                redTimer()
            }
        }.start()
    }

    private fun redTimer() {
        val redTimer = object : CountDownTimer(redTimerCount, 1000) {
            override fun onTick(millisUntilFinished: Long) {
                val tick = (millisUntilFinished / 1000)
                tvCountDown?.text = "${tick}"
            }

            override fun onFinish() {

                playWithSequence(CurrentLight.yellow)
                yellowTimer()
            }
        }.start()
    }

    private fun yellowTimer() {
    /*    val seq = getLightSequence()
        previousLightSequence = seq
        playWithSequence(CurrentLight.red)*/
        val yellowTimer = object : CountDownTimer(yellowTimerCount, 1000) {
            override fun onTick(millisUntilFinished: Long) {
                val tick = (millisUntilFinished / 1000)
                tvCountDown?.text = "${tick}"
            }

            override fun onFinish() {
                val seq = getLightSequence()
                previousLightSequence = seq
                playWithSequence(CurrentLight.red)
                greenTimer()
            }
        }.start()
    }
}