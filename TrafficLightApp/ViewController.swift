//
//  ViewController.swift
//  TrafficLightApp
//
//  Created by Sandeep Chaudhary on 28/08/21.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var vwTopYellow: UIView!
    @IBOutlet weak var vwTopRed: UIView!
    @IBOutlet weak var vwTopGreen: UIView!
    @IBOutlet weak var lblTimerTop: UILabel!
    
    @IBOutlet weak var vwDownYellow: UIView!
    @IBOutlet weak var vwDownRed: UIView!
    @IBOutlet weak var vwDownGreen: UIView!
    @IBOutlet weak var lblTimerDown: UILabel!
    
    @IBOutlet weak var vwRightYellow: UIView!
    @IBOutlet weak var vwRightRed: UIView!
    @IBOutlet weak var vwRightGreen: UIView!
    @IBOutlet weak var lblTimerRight: UILabel!
    
    @IBOutlet weak var vwLeftYellow: UIView!
    @IBOutlet weak var vwLeftRed: UIView!
    @IBOutlet weak var vwLeftGreen: UIView!
    @IBOutlet weak var lblTimerLeft: UILabel!
    
    var topTimer = Timer()
    var topTimeCount = Int()
    
    var downTimer = Timer()
    var downTimeCount = Int()
    
    var leftTimer = Timer()
    var leftTimeCount = Int()
    
    var rightTimer = Timer()
    var rightTimeCount = Int()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        topTimeCount = 0
        rightTimeCount = 30
        downTimeCount = 60
        leftTimeCount = 90
        
        lblTimerTop.text = callTimerFormatted(topTimeCount)
        lblTimerRight.text = callTimerFormatted(rightTimeCount)
        lblTimerDown.text = callTimerFormatted(downTimeCount)
        lblTimerLeft.text = callTimerFormatted(leftTimeCount)
        
        topTimer = Timer.scheduledTimer(timeInterval: 1.0, target: self, selector: #selector(startTomerTop), userInfo: nil, repeats: true)

        rightTimer = Timer.scheduledTimer(timeInterval: 1.0, target: self, selector: #selector(startTomerRight), userInfo: nil, repeats: true)

        downTimer = Timer.scheduledTimer(timeInterval: 1.0, target: self, selector: #selector(startTomerDown), userInfo: nil, repeats: true)

        leftTimer = Timer.scheduledTimer(timeInterval: 1.0, target: self, selector: #selector(startTomerLeft), userInfo: nil, repeats: true)
        
        vwTopRed.backgroundColor = UIColor.red.withAlphaComponent(0.3)
        vwTopYellow.backgroundColor = UIColor.yellow.withAlphaComponent(0.3)
        vwTopGreen.backgroundColor = UIColor.green.withAlphaComponent(1)
        
        vwRightRed.backgroundColor = UIColor.red.withAlphaComponent(1)
        vwRightYellow.backgroundColor = UIColor.yellow.withAlphaComponent(0.3)
        vwRightGreen.backgroundColor = UIColor.green.withAlphaComponent(0.3)
        
        vwDownRed.backgroundColor = UIColor.red.withAlphaComponent(1)
        vwDownYellow.backgroundColor = UIColor.yellow.withAlphaComponent(0.3)
        vwDownGreen.backgroundColor = UIColor.green.withAlphaComponent(0.3)
        
        vwLeftRed.backgroundColor = UIColor.red.withAlphaComponent(1)
        vwLeftYellow.backgroundColor = UIColor.yellow.withAlphaComponent(0.3)
        vwLeftGreen.backgroundColor = UIColor.green.withAlphaComponent(0.3)
        
    }

    @IBAction func actionBtnStart(_ sender: Any) {

    }
    
    @objc func startTomerTop() {
        if topTimeCount == 0 {
            topTimer.invalidate()
            lblTimerTop.text = callTimerFormatted(topTimeCount)
            
            vwTopRed.backgroundColor = UIColor.red.withAlphaComponent(0.3)
            vwTopYellow.backgroundColor = UIColor.yellow.withAlphaComponent(0.3)
            vwTopGreen.backgroundColor = UIColor.green.withAlphaComponent(1)
            
            vwRightRed.backgroundColor = UIColor.red.withAlphaComponent(1)
            vwRightYellow.backgroundColor = UIColor.yellow.withAlphaComponent(0.3)
            vwRightGreen.backgroundColor = UIColor.green.withAlphaComponent(0.3)
            
            vwDownRed.backgroundColor = UIColor.red.withAlphaComponent(1)
            vwDownYellow.backgroundColor = UIColor.yellow.withAlphaComponent(0.3)
            vwDownGreen.backgroundColor = UIColor.green.withAlphaComponent(0.3)
            
            vwLeftRed.backgroundColor = UIColor.red.withAlphaComponent(1)
            vwLeftYellow.backgroundColor = UIColor.yellow.withAlphaComponent(0.3)
            vwLeftGreen.backgroundColor = UIColor.green.withAlphaComponent(0.3)
            
        } else if topTimeCount == 5 {
            
            vwTopRed.backgroundColor = UIColor.red.withAlphaComponent(1)
            vwTopYellow.backgroundColor = UIColor.yellow.withAlphaComponent(0.3)
            vwTopGreen.backgroundColor = UIColor.green.withAlphaComponent(0.3)
            
            vwRightRed.backgroundColor = UIColor.red.withAlphaComponent(1)
            vwRightYellow.backgroundColor = UIColor.yellow.withAlphaComponent(0.3)
            vwRightGreen.backgroundColor = UIColor.green.withAlphaComponent(0.3)
            
            vwDownRed.backgroundColor = UIColor.red.withAlphaComponent(1)
            vwDownYellow.backgroundColor = UIColor.yellow.withAlphaComponent(0.3)
            vwDownGreen.backgroundColor = UIColor.green.withAlphaComponent(0.3)
            
            vwLeftRed.backgroundColor = UIColor.red.withAlphaComponent(0.3)
            vwLeftYellow.backgroundColor = UIColor.yellow.withAlphaComponent(1)
            vwLeftGreen.backgroundColor = UIColor.green.withAlphaComponent(0.3)
            
            lblTimerTop.text = callTimerFormatted(topTimeCount)
            topTimeCount = topTimeCount - 1
            
        } else {
            lblTimerTop.text = callTimerFormatted(topTimeCount)
            topTimeCount = topTimeCount - 1
        }
    }
    
    @objc func startTomerRight() {
        if rightTimeCount == 0 {
            rightTimer.invalidate()
            lblTimerRight.text = callTimerFormatted(rightTimeCount)
            
            topTimeCount = 90
            topTimer = Timer.scheduledTimer(timeInterval: 1.0, target: self, selector: #selector(startTomerTop), userInfo: nil, repeats: true)
            
            vwTopRed.backgroundColor = UIColor.red.withAlphaComponent(1)
            vwTopYellow.backgroundColor = UIColor.yellow.withAlphaComponent(0.3)
            vwTopGreen.backgroundColor = UIColor.green.withAlphaComponent(0.3)
            
            vwRightRed.backgroundColor = UIColor.red.withAlphaComponent(0.3)
            vwRightYellow.backgroundColor = UIColor.yellow.withAlphaComponent(0.3)
            vwRightGreen.backgroundColor = UIColor.green.withAlphaComponent(1)
            
            vwDownRed.backgroundColor = UIColor.red.withAlphaComponent(1)
            vwDownYellow.backgroundColor = UIColor.yellow.withAlphaComponent(0.3)
            vwDownGreen.backgroundColor = UIColor.green.withAlphaComponent(0.3)
            
            vwLeftRed.backgroundColor = UIColor.red.withAlphaComponent(1)
            vwLeftYellow.backgroundColor = UIColor.yellow.withAlphaComponent(0.3)
            vwLeftGreen.backgroundColor = UIColor.green.withAlphaComponent(0.3)
            
        } else if rightTimeCount == 5 {
            vwTopRed.backgroundColor = UIColor.red.withAlphaComponent(0.3)
            vwTopYellow.backgroundColor = UIColor.yellow.withAlphaComponent(1)
            vwTopGreen.backgroundColor = UIColor.green.withAlphaComponent(0.3)
            
            vwRightRed.backgroundColor = UIColor.red.withAlphaComponent(0.3)
            vwRightYellow.backgroundColor = UIColor.yellow.withAlphaComponent(0.3)
            vwRightGreen.backgroundColor = UIColor.green.withAlphaComponent(1)
            
            vwDownRed.backgroundColor = UIColor.red.withAlphaComponent(1)
            vwDownYellow.backgroundColor = UIColor.yellow.withAlphaComponent(0.3)
            vwDownGreen.backgroundColor = UIColor.green.withAlphaComponent(0.3)
            
            vwLeftRed.backgroundColor = UIColor.red.withAlphaComponent(1)
            vwLeftYellow.backgroundColor = UIColor.yellow.withAlphaComponent(0.3)
            vwLeftGreen.backgroundColor = UIColor.green.withAlphaComponent(0.3)
            
            lblTimerRight.text = callTimerFormatted(rightTimeCount)
            rightTimeCount = rightTimeCount - 1
            
        } else {
            lblTimerRight.text = callTimerFormatted(rightTimeCount)
            rightTimeCount = rightTimeCount - 1
        }
    }
    
    @objc func startTomerDown() {
        if downTimeCount == 0 {
            downTimer.invalidate()
            lblTimerDown.text = callTimerFormatted(downTimeCount)
            
            rightTimeCount = 90
            rightTimer = Timer.scheduledTimer(timeInterval: 1.0, target: self, selector: #selector(startTomerRight), userInfo: nil, repeats: true)
            
            vwTopRed.backgroundColor = UIColor.red.withAlphaComponent(1)
            vwTopYellow.backgroundColor = UIColor.yellow.withAlphaComponent(0.3)
            vwTopGreen.backgroundColor = UIColor.green.withAlphaComponent(0.3)
            
            vwRightRed.backgroundColor = UIColor.red.withAlphaComponent(1)
            vwRightYellow.backgroundColor = UIColor.yellow.withAlphaComponent(0.3)
            vwRightGreen.backgroundColor = UIColor.green.withAlphaComponent(0.3)
            
            vwDownRed.backgroundColor = UIColor.red.withAlphaComponent(0.3)
            vwDownYellow.backgroundColor = UIColor.yellow.withAlphaComponent(0.3)
            vwDownGreen.backgroundColor = UIColor.green.withAlphaComponent(1)
            
            vwLeftRed.backgroundColor = UIColor.red.withAlphaComponent(1)
            vwLeftYellow.backgroundColor = UIColor.yellow.withAlphaComponent(0.3)
            vwLeftGreen.backgroundColor = UIColor.green.withAlphaComponent(0.3)
            
            
        } else if downTimeCount == 5 {
            
            vwTopRed.backgroundColor = UIColor.red.withAlphaComponent(1)
            vwTopYellow.backgroundColor = UIColor.yellow.withAlphaComponent(0.3)
            vwTopGreen.backgroundColor = UIColor.green.withAlphaComponent(0.3)
            
            vwRightRed.backgroundColor = UIColor.red.withAlphaComponent(0.3)
            vwRightYellow.backgroundColor = UIColor.yellow.withAlphaComponent(1)
            vwRightGreen.backgroundColor = UIColor.green.withAlphaComponent(0.3)
            
            vwDownRed.backgroundColor = UIColor.red.withAlphaComponent(1)
            vwDownYellow.backgroundColor = UIColor.yellow.withAlphaComponent(0.3)
            vwDownGreen.backgroundColor = UIColor.green.withAlphaComponent(0.3)
            
            vwLeftRed.backgroundColor = UIColor.red.withAlphaComponent(1)
            vwLeftYellow.backgroundColor = UIColor.yellow.withAlphaComponent(0.3)
            vwLeftGreen.backgroundColor = UIColor.green.withAlphaComponent(0.3)
            
            lblTimerDown.text = callTimerFormatted(downTimeCount)
            downTimeCount = downTimeCount - 1
            
        } else {
            lblTimerDown.text = callTimerFormatted(downTimeCount)
            downTimeCount = downTimeCount - 1
        }
    }
    
    @objc func startTomerLeft() {
        if leftTimeCount == 0 {
            leftTimer.invalidate()
            lblTimerLeft.text = callTimerFormatted(leftTimeCount)
            
            downTimeCount = 90
            downTimer = Timer.scheduledTimer(timeInterval: 1.0, target: self, selector: #selector(startTomerDown), userInfo: nil, repeats: true)
            
            
            vwTopRed.backgroundColor = UIColor.red.withAlphaComponent(1)
            vwTopYellow.backgroundColor = UIColor.yellow.withAlphaComponent(0.3)
            vwTopGreen.backgroundColor = UIColor.green.withAlphaComponent(0.3)
            
            vwRightRed.backgroundColor = UIColor.red.withAlphaComponent(1)
            vwRightYellow.backgroundColor = UIColor.yellow.withAlphaComponent(0.3)
            vwRightGreen.backgroundColor = UIColor.green.withAlphaComponent(0.3)
            
            vwDownRed.backgroundColor = UIColor.red.withAlphaComponent(1)
            vwDownYellow.backgroundColor = UIColor.yellow.withAlphaComponent(0.3)
            vwDownGreen.backgroundColor = UIColor.green.withAlphaComponent(0.3)
            
            vwLeftRed.backgroundColor = UIColor.red.withAlphaComponent(0.3)
            vwLeftYellow.backgroundColor = UIColor.yellow.withAlphaComponent(0.3)
            vwLeftGreen.backgroundColor = UIColor.green.withAlphaComponent(1)
            
        } else if leftTimeCount == 5 {
            
            vwTopRed.backgroundColor = UIColor.red.withAlphaComponent(1)
            vwTopYellow.backgroundColor = UIColor.yellow.withAlphaComponent(0.3)
            vwTopGreen.backgroundColor = UIColor.green.withAlphaComponent(0.3)
            
            vwRightRed.backgroundColor = UIColor.red.withAlphaComponent(1)
            vwRightYellow.backgroundColor = UIColor.yellow.withAlphaComponent(0.3)
            vwRightGreen.backgroundColor = UIColor.green.withAlphaComponent(0.3)
            
            vwDownRed.backgroundColor = UIColor.red.withAlphaComponent(0.3)
            vwDownYellow.backgroundColor = UIColor.yellow.withAlphaComponent(1)
            vwDownGreen.backgroundColor = UIColor.green.withAlphaComponent(0.3)
            
            vwLeftRed.backgroundColor = UIColor.red.withAlphaComponent(1)
            vwLeftYellow.backgroundColor = UIColor.yellow.withAlphaComponent(0.3)
            vwLeftGreen.backgroundColor = UIColor.green.withAlphaComponent(0.3)
            
            lblTimerLeft.text = callTimerFormatted(leftTimeCount)
            leftTimeCount = leftTimeCount - 1
            
        } else {
            lblTimerLeft.text = callTimerFormatted(leftTimeCount)
            leftTimeCount = leftTimeCount - 1
        }
    }
    
    //MARK:- Call Timer Formatted
    func callTimerFormatted(_ totalSeconds: Int) -> String {
        let seconds: Int = totalSeconds % 60
        let minutes: Int = (totalSeconds / 60) % 60
        return String(format: "%02d:%02d", minutes, seconds)
    }
    
    
    
}

