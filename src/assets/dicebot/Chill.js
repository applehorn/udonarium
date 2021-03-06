/* Generated by Opal 1.0.3 */
(function(Opal) {
  function $rb_ge(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs >= rhs : lhs['$>='](rhs);
  }
  function $rb_gt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs > rhs : lhs['$>'](rhs);
  }
  function $rb_times(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs * rhs : lhs['$*'](rhs);
  }
  function $rb_divide(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs / rhs : lhs['$/'](rhs);
  }
  function $rb_lt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs < rhs : lhs['$<'](rhs);
  }
  function $rb_minus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs - rhs : lhs['$-'](rhs);
  }
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $$$ = Opal.const_get_qualified, $$ = Opal.const_get_relative, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $truthy = Opal.truthy;

  Opal.add_stubs(['$setPrefixes', '$!=', '$>=', '$>', '$*', '$/', '$roll_strike_rank_result', '$debug', '$=~', '$to_i', '$last_match', '$<', '$check_strike_rank', '$-', '$+', '$roll', '$to_s', '$sendMode', '$empty?']);
  return (function($base, $super, $parent_nesting) {
    var self = $klass($base, $super, 'Chill');

    var $nesting = [self].concat($parent_nesting), $Chill_check_1D100$1, $Chill_rollDiceCommand$2, $Chill_roll_strike_rank_result$3, $Chill_check_strike_rank$4;

    
    Opal.const_set($nesting[0], 'ID', "Chill");
    Opal.const_set($nesting[0], 'NAME', "Chill");
    Opal.const_set($nesting[0], 'SORT_KEY', "ちる");
    Opal.const_set($nesting[0], 'HELP_MESSAGE', "" + "・ストライク・ランク　(SRx)\n" + "　\"SRストライク・ランク\"の形で記入します。\n" + "　ストライク・ランク・チャートに従って自動でダイスロールを行い、\n" + "　負傷とスタミナロスを計算します。\n" + "　ダイスロールと同様に、他のプレイヤーに隠れてロールすることも可能です。\n" + "　例）SR7　　　sr13　　　SR(7+4)　　　Ssr10\n");
    self.$setPrefixes(["SR\\d+.*"]);
    
    Opal.def(self, '$check_1D100', $Chill_check_1D100$1 = function $$check_1D100(total, _dice_total, cmp_op, target) {
      var self = this;

      
      if ($truthy(cmp_op['$!=']("<="))) {
        return ""};
      if ($truthy($rb_ge(total, 100))) {
        return " ＞ ファンブル"
      } else if ($truthy($rb_gt(total, target))) {
        return " ＞ 失敗"
      } else if ($truthy($rb_ge(total, $rb_times(target, 0.9)))) {
        return " ＞ Ｌ成功"
      } else if ($truthy($rb_ge(total, $rb_divide(target, 2)))) {
        return " ＞ Ｍ成功"
      } else if ($truthy($rb_ge(total, $rb_divide(target, 10)))) {
        return " ＞ Ｈ成功"
      } else {
        return " ＞ Ｃ成功"
      };
    }, $Chill_check_1D100$1.$$arity = 4);
    
    Opal.def(self, '$rollDiceCommand', $Chill_rollDiceCommand$2 = function $$rollDiceCommand(command) {
      var self = this;

      return self.$roll_strike_rank_result(command)
    }, $Chill_rollDiceCommand$2.$$arity = 1);
    
    Opal.def(self, '$roll_strike_rank_result', $Chill_roll_strike_rank_result$3 = function $$roll_strike_rank_result(string) {
      var $a, $b, self = this, output = nil, wounds = nil, sta_loss = nil, dice = nil, dice_add = nil, dice_str = nil, strikeRank = nil, dice_w = nil, dice_ws = nil, dice_wa = nil, wounds_wk = nil;

      
      self.$debug("strike_rank begin string", string);
      output = "";
      wounds = 0;
      sta_loss = 0;
      dice = "";
      dice_add = "";
      dice_str = "";
      if ($truthy(/(^|\s)[sS]?(SR|sr)(\d+)($|\s)/['$=~'](string))) {
      } else {
        
        self.$debug("invalid string", string);
        return "1";
      };
      strikeRank = $$($nesting, 'Regexp').$last_match(3).$to_i();
      dice_w = "";
      dice_ws = "";
      dice_wa = "";
      if ($truthy($rb_lt(strikeRank, 14))) {
        
        $b = self.$check_strike_rank(strikeRank), $a = Opal.to_ary($b), (sta_loss = ($a[0] == null ? nil : $a[0])), (dice = ($a[1] == null ? nil : $a[1])), (dice_add = ($a[2] == null ? nil : $a[2])), (dice_str = ($a[3] == null ? nil : $a[3])), $b;
        $b = self.$check_strike_rank($rb_minus(strikeRank, 3)), $a = Opal.to_ary($b), (wounds = ($a[0] == null ? nil : $a[0])), (dice_w = ($a[1] == null ? nil : $a[1])), (dice_wa = ($a[2] == null ? nil : $a[2])), (dice_ws = ($a[3] == null ? nil : $a[3])), $b;
        dice = $rb_plus($rb_plus(dice, ", "), dice_w);
        dice_add = $rb_plus(dice_add, $rb_plus(", ", dice_wa));
        dice_str = $rb_plus($rb_plus(dice_str, ", "), dice_ws);
      } else {
        
        wounds_wk = 0;
        $b = self.$check_strike_rank(13), $a = Opal.to_ary($b), (sta_loss = ($a[0] == null ? nil : $a[0])), (dice = ($a[1] == null ? nil : $a[1])), (dice_add = ($a[2] == null ? nil : $a[2])), (dice_str = ($a[3] == null ? nil : $a[3])), $b;
        $b = self.$roll(4, 10), $a = Opal.to_ary($b), (wounds = ($a[0] == null ? nil : $a[0])), (dice_ws = ($a[1] == null ? nil : $a[1])), $b;
        dice = $rb_plus($rb_plus("5d10*3, 4d10+", $rb_times($rb_minus(strikeRank, 13), 2).$to_s()), "d10");
        dice_add = $rb_plus(dice_add, $rb_plus(", ", wounds.$to_s()));
        dice_str = "" + (dice_str) + ", " + (dice_ws);
        $b = self.$roll($rb_times($rb_minus(strikeRank, 13), 2), 10), $a = Opal.to_ary($b), (wounds_wk = ($a[0] == null ? nil : $a[0])), (dice_ws = ($a[1] == null ? nil : $a[1])), $b;
        dice_str = $rb_plus(dice_str, "" + "+" + (dice_ws));
        dice_add = $rb_plus(dice_add, "" + "+" + (wounds_wk));
        wounds = $rb_plus(wounds, wounds_wk);
      };
      if ($truthy($rb_gt(self.$sendMode(), 1))) {
        output = "" + (dice_str) + " ＞ " + (dice_add) + " ＞ スタミナ損失" + (sta_loss) + ", 負傷" + (wounds)
      } else if ($truthy($rb_gt(self.$sendMode(), 0))) {
        output = "" + (dice_add) + " ＞ スタミナ損失" + (sta_loss) + ", 負傷" + (wounds)
      } else {
        output = $rb_plus($rb_plus($rb_plus("スタミナ損失", sta_loss), ", 負傷"), wounds)
      };
      string = $rb_plus(string, $rb_plus(":", dice));
      if ($truthy(output['$empty?']())) {
        return "1"};
      output = "" + "(" + (string) + ") ＞ " + (output);
      self.$debug("strike_rank end output", output);
      return output;
    }, $Chill_roll_strike_rank_result$3.$$arity = 1);
    return (Opal.def(self, '$check_strike_rank', $Chill_check_strike_rank$4 = function $$check_strike_rank(strikeRank) {
      var $a, $b, self = this, dice = nil, dice_add = nil, dice_str = nil, damage = nil;

      
      strikeRank = strikeRank.$to_i();
      dice = "";
      dice_add = "";
      dice_str = "";
      damage = 0;
      if ($truthy($rb_lt(strikeRank, 1))) {
        
        damage = 0;
        dice_str = "-";
        dice_add = "-";
        dice = "-";
      } else if ($truthy($rb_lt(strikeRank, 2))) {
        
        dice = "0or1";
        $b = self.$roll(1, 2), $a = Opal.to_ary($b), (damage = ($a[0] == null ? nil : $a[0])), (dice_str = ($a[1] == null ? nil : $a[1])), $b;
        damage = $rb_minus(damage, 1);
        dice_add = damage.$to_s();
      } else if ($truthy($rb_lt(strikeRank, 3))) {
        
        dice = "1or2";
        $b = self.$roll(1, 2), $a = Opal.to_ary($b), (damage = ($a[0] == null ? nil : $a[0])), (dice_str = ($a[1] == null ? nil : $a[1])), $b;
        dice_add = damage.$to_s();
      } else if ($truthy($rb_lt(strikeRank, 4))) {
        
        dice = "1d5";
        $b = self.$roll(1, 5), $a = Opal.to_ary($b), (damage = ($a[0] == null ? nil : $a[0])), (dice_str = ($a[1] == null ? nil : $a[1])), $b;
        dice_add = damage.$to_s();
      } else if ($truthy($rb_lt(strikeRank, 10))) {
        
        dice = $rb_plus($rb_minus(strikeRank, 3).$to_s(), "d10");
        $b = self.$roll($rb_minus(strikeRank, 3), 10), $a = Opal.to_ary($b), (damage = ($a[0] == null ? nil : $a[0])), (dice_str = ($a[1] == null ? nil : $a[1])), $b;
        dice_add = damage.$to_s();
      } else if ($truthy($rb_lt(strikeRank, 13))) {
        
        dice = $rb_plus($rb_minus(strikeRank, 6).$to_s(), "d10*2");
        $b = self.$roll($rb_minus(strikeRank, 6), 10), $a = Opal.to_ary($b), (damage = ($a[0] == null ? nil : $a[0])), (dice_str = ($a[1] == null ? nil : $a[1])), $b;
        dice_add = $rb_plus(damage.$to_s(), "*2");
        damage = $rb_times(damage, 2);
        dice_str = "" + "(" + (dice_str) + ")*2";
      } else {
        
        dice = "5d10*3";
        $b = self.$roll(5, 10), $a = Opal.to_ary($b), (damage = ($a[0] == null ? nil : $a[0])), (dice_str = ($a[1] == null ? nil : $a[1])), $b;
        dice_add = $rb_plus(damage.$to_s(), "*3");
        damage = $rb_times(damage, 3);
        dice_str = "" + "(" + (dice_str) + ")*3";
      };
      return [damage, dice, dice_add, dice_str];
    }, $Chill_check_strike_rank$4.$$arity = 1), nil) && 'check_strike_rank';
  })($nesting[0], $$($nesting, 'DiceBot'), $nesting)
})(Opal);
